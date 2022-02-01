(function() {

    let images = {
            n: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAABmJLR0QAAAAAAAD5Q7t/AAAANElEQVQY02NgYGBg+A8FDGgAWZyJgUjAhMsEvArxARZkDiMjIyPMZLJNxKqQEQqoZyJFCgGIgxwF+mHVEgAAAABJRU5ErkJggg==",
            e: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAUAAAAFCAYAAACNbyblAAAABmJLR0QAAAAAAAD5Q7t/AAAAKElEQVQI122MsQ0AMAyDIP//7C7N4pbJwhICJAkXVVoCzI4+HuGveQBYqxP57rdQtQAAAABJRU5ErkJggg==",
            s: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAUAAAAFCAYAAACNbyblAAAABmJLR0QAAAAAAAD5Q7t/AAAAJ0lEQVQI13WLsQ0AMAyDQOr/L7tLvUQpozECJAkPVeYI4PdZKs+WX0ljE/tp/tYzAAAAAElFTkSuQmCC",
            w: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAABmJLR0QAAAAAAAD5Q7t/AAAANklEQVQY02NgIBIw/v///z8DAwMDIyMjIzYFMHkmYk1kwmYCzBS8Cok2kWKFON2GzifdREIAAKqsH/JDV8CHAAAAAElFTkSuQmCC"
        },
        buildGridCopy = buildGrid;

    Plugin.register('cardinal', {
        title: 'Cardinal',
        author: 'Bug1312',
        description: 'Adds in all cardinal directions on the grid and renders them on-top of everything while facing you',
        icon: 'border_outer',
        version: '1.0.0',
        variant: 'both',
        onload() {
            window.buildGrid = function() {
                // Default grid
                buildGridCopy();

                // Hide default North mark
                three_grid.children.find(e => e.type == "Mesh").visible = false;

                // Generate other marks
                addMark(images.n, [0, 0, -9.5]);
                addMark(images.e, [9.5, 0, 0]);
                addMark(images.s, [0, 0, 9.5]);
                addMark(images.w, [-9.5, 0, 0]);
            }
            buildGrid();
        },
        onunload() {
            window.buildGrid = buildGridCopy;
        },
        onuninstall() {
            buildGrid();
        }
    });

    function addMark(src, pos) {
        let img = new Image(),
            tex = new THREE.Texture(img);

        img.src = src;
        img.tex = tex;
        img.tex.magFilter = THREE.NearestFilter;
        img.tex.minFilter = THREE.NearestFilter;
        img.onload = function() {
            this.tex.needsUpdate = true;
        }
        let material = new THREE.MeshBasicMaterial({
                map: tex,
                transparent: true,
                side: THREE.DoubleSide,
                alphaTest: 0.2
            }),
            mark = new THREE.Mesh(new THREE.PlaneGeometry(2.4, 2.4), material);

        mark.renderOrder = 999;
        mark.material.depthTest = false;
        mark.material.depthWrite = false;
        mark.onBeforeRender = function(renderer) {
            this.lookAt(main_preview.camPers.position);
            renderer.clearDepth();
        };

        if (Format.centered_grid) mark.position.set(pos[0], pos[1], pos[2]);
        else mark.position.set(pos[0] + 8, pos[1], pos[2] + 8);

        mark.rotation.x = Math.PI / -2;

        three_grid.add(mark);
    };

})();