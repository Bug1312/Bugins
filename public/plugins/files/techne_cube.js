(function() {
    // Functions
    {
        // Runs all shape functions and removes previously drawn ones
        function addCube() {
            removeCube();
            let texture = new THREE.TextureLoader().load('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAIAAACQkWg2AAAA4UlEQVQ4EWVSIQ7DMAzMa/aBIoPtBQsrKjAIKzYdzAMKw/KJwjxuii66WZ4UTa59Pt/ZS6OVXjPfaGW0cl9Hrxmx/+01JyJM5b4OQNnfa0bmvg5Qr4aAQNlzIZ4Tzn3DM5X/x+q5b6jOCZ6eTMxTKsYmoEMW0mEpuFoesBnQk7vXbCpMIkhQ5rVSrqn4/M+D5zAVXoCSCJhb8o4BDdeAKsKmh8DEWrAO99MDRVNxOIjP/7YEoVDlh2AO15UwiN++LZhB55pASt+Ag/j/1Whl3cFUPuUFrQho49y39/OBkql8AQKDaw/ja5jjAAAAAElFTkSuQmCC');
            texture.magFilter = THREE.NearestFilter;

            let geometry = new THREE.BoxGeometry(16, 16, 16);
            let material = new THREE.MeshBasicMaterial({
                map: texture
            });

            let mesh = new THREE.Mesh(geometry, material);
            mesh.position.y -= 8;
            if (Format.centered_grid == false) {
                mesh.position.x += 8;
                mesh.position.z += 8;
            };
            mesh.rotation.x = Math.PI / 2;
            mesh.name = "Techne_Cube";
            scene.add(mesh);
        };

        function removeCube() {
            scene.children.forEach(element => {
                if (element.name == "Techne_Cube")
                    scene.remove(element);
            });
        }
    }

    // When joining sessions, loading, creating, or resetting projects add shapes
    Blockbench.on('join_session load_project new_project reset_project', () => {
        addCube();
    });

    // Plugin registry needed to display on Blockbench
    Plugin.register('techne_cube', {
        title: 'Techne Cube',
        author: 'Bug1312',
        icon: Blockbench.getIconNode('view_in_ar'),
        description: 'Adds the classic Techne wood block to the scene',
        version: '1.0.0',
        variant: 'both',
        onload() {
            addCube();
        },
        onunload() {
            removeCube();
        }
    });
})();