(function () {
    // Functions
    {
        // Fetches json file that has latest version and compares
        function checkVersion() {
            fetch('https://DocumentationMo-Shapes.bug1312.repl.co/INFO/latestvers.json')
                .then(response => response.json())
                .then(data => {
                    if (data.version > version && data != undefined) {
                        Blockbench.showMessageBox({
                            title: 'Update!',
                            message: "The Mo' Shapes plugin has an update! Would you like to update?",
                            buttons: ["Open Website", "Close"]
                        }, function (result) {
                            if (result == 0) {
                                window.open('https://DocumentationMo-Shapes.bug1312.repl.co', '_blank')
                            }
                        })
                    }
                });
        }
        // Removes all custom shapes
        function removeShapes() {
            while (0 < scene.children.filter(mesh => mesh.name.includes('ShapePlugin')).length) {
                scene.remove(scene.children.filter(mesh => mesh.name.includes('ShapePlugin'))[0])
            }
        };

        // Gets Three.js material based on color given and glow boolean
        function getMaterial(color, glow) {
            // If no color is given, set to normal material
            if (color == undefined) {
                return new THREE.MeshNormalMaterial();
            } else if (glow == undefined || glow == false) {
                // If color is given but glow is false or not given, set to standard material
                return new THREE.MeshStandardMaterial({
                    color: color
                });
            } else {
                // If color is given and glow is true, set to basic material
                return new THREE.MeshBasicMaterial({
                    color: color
                });
            }
        };

        // Adds shapes by indicator cube, geometrey, color, and glow boolean
        function addShape(cube, geometry, color, glow) {
            let material = getMaterial(color, glow),
                newShape = new THREE.Mesh(geometry, material);
            // Adds shape to scene
            scene.add(newShape);
            // Sets name for future deletion
            newShape.name = 'ShapePlugin';
            // Sets scale to indicator's
            newShape.scale.x = cube.size(0);
            newShape.scale.y = cube.size(1);
            newShape.scale.z = cube.size(2);
            // Sets position to indicator's
            newShape.position.x = cube.to[0] - cube.size(0) / 2
            newShape.position.y = cube.to[1] - cube.size(1) / 2
            newShape.position.z = cube.to[2] - cube.size(2) / 2
            // Sets rotation to indicator's
            newShape.rotation.x = cube.mesh.rotation.x;
            newShape.rotation.y = cube.mesh.rotation.y;
            newShape.rotation.z = cube.mesh.rotation.z;

        };

        // Shapes
        {
            // Adds sphere
            function sphere(filteredCubes) {
                // ShapeSphere_color_glow
                for (let i = 0; i < filteredCubes.length; i++) {
                    let cube = filteredCubes[i],
                        geometry = new THREE.SphereGeometry(0.5, 36, 36, 0, Math.PI * 2, 0, Math.PI * 2);
                    if (cube.name[11]) {
                        // If there is a color
                        if (cube.name.match(/_/g).length == 2) {
                            // If there is glow
                            addShape(cube, geometry, cube.name.match(/(?<=_)[\s\S]*(?=_)/g)[0], true)
                        } else {
                            addShape(cube, geometry, cube.name.substr(12))
                        }
                    } else {
                        addShape(cube, geometry)
                    }
                }
            };

            // Adds cylinder
            function cylinder(filteredCubes) {
                // ShapeCylinder_color_glow
                for (let i = 0; i < filteredCubes.length; i++) {
                    let cube = filteredCubes[i],
                        geometry = new THREE.CylinderGeometry(0.5, 0.5, 1, 50, 50);
                    if (cube.name[13]) {
                        // If there is a color
                        if (cube.name.match(/_/g).length == 2) {
                            // If there is glow
                            addShape(cube, geometry, cube.name.match(/(?<=_)[\s\S]*(?=_)/g)[0], true)
                        } else {
                            addShape(cube, geometry, cube.name.substr(14))
                        }
                    } else {
                        addShape(cube, geometry)
                    }
                }
            };

            // Adds icosahedron
            function icosahedron(filteredCubes) {
                // ShapeIcosahedron_color_glow
                for (let i = 0; i < filteredCubes.length; i++) {
                    let cube = filteredCubes[i],
                        geometry = new THREE.IcosahedronGeometry(0.5);
                    if (cube.name[16]) {
                        // If there is a color
                        if (cube.name.match(/_/g).length == 2) {
                            // If there is glow
                            addShape(cube, geometry, cube.name.match(/(?<=_)[\s\S]*(?=_)/g)[0], true)
                        } else {
                            addShape(cube, geometry, cube.name.substr(17))
                        }
                    } else {
                        addShape(cube, geometry)
                    }
                }
            };

            // Adds cone ( cylinder with top size 0 )
            function cone(filteredCubes) {
                // ShapeCone_color_glow
                for (let i = 0; i < filteredCubes.length; i++) {
                    let cube = filteredCubes[i],
                        geometry = new THREE.CylinderGeometry(0, 0.5, 1, 50, 50);
                    if (cube.name[9]) {
                        // If there is a color
                        if (cube.name.match(/_/g).length == 2) {
                            // If there is glow
                            addShape(cube, geometry, cube.name.match(/(?<=_)[\s\S]*(?=_)/g)[0], true)
                        } else {
                            addShape(cube, geometry, cube.name.substr(10))
                        }
                    } else {
                        addShape(cube, geometry)
                    }
                }
            };

            // Adds octahedron
            function octahedron(filteredCubes) {
                // ShapeOctahedron_color_glow
                for (let i = 0; i < filteredCubes.length; i++) {
                    let cube = filteredCubes[i],
                        geometry = new THREE.OctahedronGeometry(0.5);
                    if (cube.name[15]) {
                        // If there is a color
                        if (cube.name.match(/_/g).length == 2) {
                            // If there is glow
                            addShape(cube, geometry, cube.name.match(/(?<=_)[\s\S]*(?=_)/g)[0], true)
                        } else {
                            addShape(cube, geometry, cube.name.substr(16))
                        }
                    } else {
                        addShape(cube, geometry)
                    }
                }
            };

            // Adds tetrahedron
            function tetrahedron(filteredCubes) {
                for (let i = 0; i < filteredCubes.length; i++) {
                    // ShapeOctahedron_color_glow
                    let cube = filteredCubes[i],
                        geometry = new THREE.TetrahedronGeometry(0.5);
                    if (cube.name[16]) {
                        // If there is a color
                        if (cube.name.match(/_/g).length == 2) {
                            // If there is glow
                            addShape(cube, geometry, cube.name.match(/(?<=_)[\s\S]*(?=_)/g)[0], true)
                        } else {
                            addShape(cube, geometry, cube.name.substr(17))
                        }
                    } else {
                        addShape(cube, geometry)
                    }
                }
            };

            // Adds ring/donut/torus
            function ring(filteredCubes) {
                // ShapeRing_color_glow
                for (let i = 0; i < filteredCubes.length; i++) {
                    let cube = filteredCubes[i],
                        geometry = new THREE.TorusGeometry(0.5, Math.min(...[cube.size(0), cube.size(1), cube.size(2)]) / 16, 50, 50);
                    if (cube.name[9]) {
                        // If there is a color
                        if (cube.name.match(/_/g).length == 2) {
                            // If there is glow
                            addShape(cube, geometry, cube.name.match(/(?<=_)[\s\S]*(?=_)/g)[0], true)
                        } else {
                            addShape(cube, geometry, cube.name.substr(10))
                        }
                    } else {
                        addShape(cube, geometry)
                    }
                }
            };

            // Adds specific torus knot
            function knot(filteredCubes) {
                // ShapeKnot_color_glow
                for (let i = 0; i < filteredCubes.length; i++) {
                    let cube = filteredCubes[i],
                        geometry = new THREE.TorusKnotGeometry(0.5, Math.min(...[cube.size(0), cube.size(1), cube.size(2)]) / 16, 50, 50);
                    if (cube.name[9]) {
                        // If there is a color
                        if (cube.name.match(/_/g).length == 2) {
                            // If there is glow
                            addShape(cube, geometry, cube.name.match(/(?<=_)[\s\S]*(?=_)/g)[0], true)
                        } else {
                            addShape(cube, geometry, cube.name.substr(10))
                        }
                    } else {
                        addShape(cube, geometry)
                    }
                }
            };
        }

        // Runs all shape functions and removes previously drawn ones
        function addAllShapes() {
            removeShapes();
            sphere(Cube.all.filter(cube => cube.name.includes('ShapeSphere')));
            cylinder(Cube.all.filter(cube => cube.name.includes('ShapeCylinder')));
            icosahedron(Cube.all.filter(cube => cube.name.includes('ShapeIcosahedron')));
            cone(Cube.all.filter(cube => cube.name.includes('ShapeCone')));
            octahedron(Cube.all.filter(cube => cube.name.includes('ShapeOctahedron')));
            tetrahedron(Cube.all.filter(cube => cube.name.includes('ShapeTetrahedron')));
            ring(Cube.all.filter(cube => cube.name.includes('ShapeRing')));
            knot(Cube.all.filter(cube => cube.name.includes('ShapeKnot')));
        };

        // Loop for reloading shapes every two seconds if live mode is on
        function liveModeUpdate() {
            setTimeout(function () {
                if (Format.liveMode == true) {
                    addAllShapes();
                    setTimeout(liveModeUpdate(), 1000)
                }
            }, 1000);
        };

        // Checks if action exists in specified location, if it doesn't add it
        function actionCheck(action, actionId, location, locationID) {
            if (MenuBar.menues[location].structure.find(action => action.id == actionId) == undefined) {
                MenuBar.addAction(action, locationID)
            } else {
                action.delete()
            }
        }
    }

    // Variables
    {
        // Action for (re)loading shapes
        var shapeLoadAction = new Action({
                id: 'load_shapes',
                name: 'Load shapes',
                icon: Blockbench.getIconNode('update'),
                description: 'Sets specified cubes to their respective shapes',
                click: function () {
                    addAllShapes();
                }
            }),
            // Action for removing all shapes
            shapeRemoveAction = new Action({
                id: 'remove_shapes',
                name: 'Remove Shapes',
                icon: Blockbench.getIconNode('block'),
                description: 'Removes all Non-Rectangular Prisms',
                click: function () {
                    removeShapes();
                }
            }),
            // Action for adding a sphere indicator
            shapeAddSphere = new Action({
                id: 'add_sphere',
                name: 'Add Sphere Indicator',
                icon: Blockbench.getIconNode('fa-circle'),
                description: 'Adds a Sphere indicator',
                click: function () {
                    new Cube({
                        name: 'ShapeSphere'
                    }).init();
                }
            }),
            // Action for adding a cylinder indicator
            shapeAddCylinder = new Action({
                id: 'add_cylinder',
                name: 'Add Cylinder Indicator',
                icon: Blockbench.getIconNode('fa-hockey-puck'),
                description: 'Adds a Cylinder indicator',
                click: function () {
                    new Cube({
                        name: 'ShapeCylinder'
                    }).init();
                }
            }),
            // Action for adding an icosahedron indicator
            shapeAddIcosahedron = new Action({
                id: 'add_icosahedron',
                name: 'Add Icosahedron Indicator',
                icon: Blockbench.getIconNode('fa-dice-d20'),
                description: 'Adds a Icosahedron indicator',
                click: function () {
                    new Cube({
                        name: 'ShapeIcosahedron'
                    }).init();
                }
            }),
            // Action for adding a cone indicator
            shapeAddCone = new Action({
                id: 'add_cone',
                name: 'Add Cone Indicator',
                icon: Blockbench.getIconNode('fa-caret-up'),
                description: 'Adds a Cone indicator',
                click: function () {
                    new Cube({
                        name: 'ShapeCone'
                    }).init();
                }
            }),
            // Action for adding an octahedron indicator
            shapeAddOctahedron = new Action({
                id: 'add_octahedron',
                name: 'Add Octahedron Indicator',
                icon: Blockbench.getIconNode('fab.fa-ethereum'),
                description: 'Adds a Octahedron indicator',
                click: function () {
                    new Cube({
                        name: 'ShapeOctahedron'
                    }).init();
                }
            }),
            // Action for adding a tetrahedron indicator
            shapeAddTetrahedron = new Action({
                id: 'add_tetrahedron',
                name: 'Add Tetrahedron Indicator',
                icon: Blockbench.getIconNode('change_history'),
                description: 'Adds a Tetrahedron indicator',
                click: function () {
                    new Cube({
                        name: 'ShapeTetrahedron'
                    }).init();
                }
            }),
            // Action for adding a ring indicator
            shapeAddRing = new Action({
                id: 'add_ring',
                name: 'Add Ring Indicator',
                icon: Blockbench.getIconNode('fa-dot-circle'),
                description: 'Adds a Ring indicator',
                click: function () {
                    new Cube({
                        name: 'ShapeRing'
                    }).init();
                }
            }),
            // Action for adding a knot indicator
            shapeAddKnot = new Action({
                id: 'add_knot',
                name: 'Add Knot Indicator',
                icon: Blockbench.getIconNode('all_inclusive'),
                description: 'Adds a Knot indicator',
                click: function () {
                    new Cube({
                        name: 'ShapeKnot'
                    }).init();
                }
            }),
            // Action for toggling live mode
            liveMode = new Action({
                id: 'live_mode',
                name: 'Mo\' Shapes Live',
                icon: Blockbench.getIconNode('all_inclusive'),
                description: 'Sets all shapes live, WARNING : CAN LOWER FPS',
                click: function () {
                    if (Format.liveMode) {
                        // Notifies user of live mode being disabled and setting it
                        Blockbench.showQuickMessage('Mo\' Shapes Live Disabled');
                        Format.liveMode = !Format.liveMode
                    } else {
                        // Notifies user of live mode being enabled and setting it
                        Blockbench.showQuickMessage('Mo\' Shapes Live Enabled');
                        Format.liveMode = true
                    }
                    liveModeUpdate()
                }
            }),
            // Version number used when checking online version
            version = '1.0.1';
    }

    // Adds shapes menu
    new BarMenu('shape_plugin_menu', [shapeLoadAction, shapeRemoveAction, '_', liveMode, '_', shapeAddCone, shapeAddCylinder, shapeAddIcosahedron, shapeAddKnot, shapeAddOctahedron, shapeAddRing, shapeAddSphere, shapeAddTetrahedron], () => Modes.selected.id == 'edit');
    // Updates menu to add shapes menu
    MenuBar.update();

    // When joining sessions, loading, creating, or resetting projects add shapes
    Blockbench.on('join_session load_project new_project reset_project', () => {
        setTimeout(addAllShapes, 500)
        if ($('li:contains(menu.shape_plugin_menu)').length == 1) {
            $('li:contains(menu.shape_plugin_menu)')[0].innerHTML = 'Shapes'
        }
    });

    // Plugin registry needed to display on Blockbench
    Plugin.register('mo_shapes', {
        title: 'Mo\' Shapes',
        author: 'Bug1312',
        icon: Blockbench.getIconNode('fa-shapes'),
        description: 'Spheres, Ovoids, Cones, and more! All in Blockbench with this plugin.',
        version: version,
        variant: 'both',
        onload() {
            // Check for update
            checkVersion();
            // Sets 'menu.shape_plugin_menu' to instead display 'Shapes'
            try {
                $('li:contains(menu.shape_plugin_menu)')[0].innerHTML = 'Shapes';
            } catch (err) {}
            // Checks if all actions need to be added
            actionCheck(shapeLoadAction, 'load_shapes', 'shape_plugin_menu', 'shape_plugin_menu');
            actionCheck(shapeRemoveAction, 'remove_shapes', 'shape_plugin_menu', 'shape_plugin_menu');
            actionCheck(liveMode, 'live_mode', 'shape_plugin_menu', 'shape_plugin_menu');
            actionCheck(shapeAddSphere, 'add_sphere', 'shape_plugin_menu', 'shape_plugin_menu');
            actionCheck(shapeAddCylinder, 'add_cylinder', 'shape_plugin_menu', 'shape_plugin_menu');
            actionCheck(shapeAddIcosahedron, 'add_icosahedron', 'shape_plugin_menu', 'shape_plugin_menu');
            actionCheck(shapeAddCone, 'add_cone', 'shape_plugin_menu', 'shape_plugin_menu');
            actionCheck(shapeAddOctahedron, 'add_octahedron', 'shape_plugin_menu', 'shape_plugin_menu');
            actionCheck(shapeAddTetrahedron, 'add_tetrahedron', 'shape_plugin_menu', 'shape_plugin_menu');
            actionCheck(shapeAddRing, 'add_ring', 'shape_plugin_menu', 'shape_plugin_menu');
            actionCheck(shapeAddKnot, 'add_knot', 'shape_plugin_menu', 'shape_plugin_menu');
        },
        onuninstall() {
            // Removes menu bar
            $('li:contains(Shapes)')[1].remove();
            $('li:contains(shape_plugin_menu)')[0].remove();
            // Removes all actions and buttons
            shapeLoadAction.delete();
            shapeRemoveAction.delete();
            liveMode.delete();
            shapeAddSphere.delete();
            shapeAddCylinder.delete();
            shapeAddIcosahedron.delete();
            shapeAddCone.delete();
            shapeAddOctahedron.delete();
            shapeAddTetrahedron.delete();
            shapeAddRing.delete();
            shapeAddKnot.delete();
            // Removes all shapes
            removeShapes();
        }
    });
})();