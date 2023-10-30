(function() {
    // EZC variables
    const version = '3.1.0',
        pluginTitle = `MDL Export`,
        installNotificationTitle = `${pluginTitle} Changelog`,
        installNotificationMsg = 'Now Supports BlockBench 4',
        website = 'https://bugins.bug1312.com/docs/mdl/',
        about = `<a href="${website}">Click here to go to the documentation!</a>`,
        versionPath = 'https://bugins.bug1312.com/plugins/info/Bugin.json';

    // Images ( Base64 )
    const imgs = {
        mdlx32: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAACXBIWXMAAAsSAAALEgHS3X78AAAAG3RFWHRTb2Z0d2FyZQBDZWxzeXMgU3R1ZGlvIFRvb2zBp+F8AAABn0lEQVRYw+3Xr04DQRAG8O881SS0OUVqjgdoQkIqEFhSWSSqyfk+Av7egKSyoh7RoK6+mAZ1FIGuhRyGuUyXmf13hYSE1df7fju33Z1N6rpG7KhmoxoA0vE8iX1HEgOgYHPEQIIAZvDuZYtdtcXJ+SAa4gWQggEgm64AAOWkCwBRECvAFQwA/bzApsijISLAN5gPQoRC9gAxwRIgBNIAeHjIjG2VsEEI0QDKSbcWpNYArRrm89VsBLOy2XT1HUAPmJDLcijOjAOkijwMlpA+6Vd1dYAGScdzdaa+wU7A+vENZxfH3pCQ4OflE06HmRtwu37fWzw2SD8vnMG0mBdXR/4AmtmmyJ0QVzCNKABfZBrEFXwQgAbppD1ncCuA9PfiCAJcv96oG9FBACbi/uPu9wEc8Q/4MwD+ntb7QMgilH4fBHAduRrA1qh4AQgBQIXY9gEtGEATLgKkI1mCmF2ObQ1IwTxcbUp9ICaAb8M+wV5tuQ0iAUKCgy4mEoSaFgLwZsMnOOpqJrVt/DQMCW51OeUQ4zj+2cupBOmkvahgGp8VvS3fT6+45wAAAABJRU5ErkJggg=='
    };


    // Actions
    {
        var export_mdl3 = new Action({
                id: 'export_mdl3',
                name: 'Export MDL3',
                icon: 'archive',
                description: 'Exports your model as a MDL',
                category: 'file',
                condition: () => Format,
                click: function() {
                    if (saveWarning()) {
                        Export(3);
                    }
                }
            }),
            export_mdl1 = new Action({
                id: 'export_mdl1',
                name: 'Export MDL1',
                icon: 'archive',
                description: 'Exports your model as a MDL',
                category: 'file',
                condition: () => Format.id === Formats.modded_entity.id,
                click: function() {
                    Export(1)
                }
            }),
            // Action for hiding/showing MDL3 buttons
            action_bugin_toggle = new Action({
                id: 'bugin_toggle',
                name: 'Bugin Tool Toggle',
                icon: Format.bugin_toggle ? 'create_new_folder' : 'folder_open',
                category: 'transform',
                click: function() {
                    // Change both the icon of the button, and the bugin_toggle variable
                    let state = Format.bugin_toggle
                    if (state) {
                        Format.bugin_toggle = false
                        this.setIcon('folder_open')
                    } else {
                        Format.bugin_toggle = true
                        this.setIcon('create_new_folder')
                    }
                    updateButtons();
                }
            }),
            // Action for making every group a MDL3 group
            action_every_group = new Action({
                id: 'every_group',
                name: 'Set All MDL3 Group',
                icon: 'create_new_folder',
                category: 'filter',
                click: function() {
                    Group.all.forEach(group => {
                        group.bugin_mdl3_group = true;
                    });
                }
            }),
            // Action for making every group not a MDL3 group
            action_none_group = new Action({
                id: 'none_group',
                name: 'Remove All MDL3 Groups',
                icon: 'folder_open',
                category: 'filter',
                click: function() {
                    Group.all.forEach(group => {
                        group.bugin_mdl3_group = false;
                    });
                }
            });
    }

    // Helper functions
    {
        // Remove or add actions based on if they already exist
        function actionCheck(action, actionId, location, locationID) {
            BarItems[actionId] = action;
            if (location.find(action => action.id == actionId) == undefined) {
                MenuBar.addAction(action, locationID);
            } else {
                action.delete();
            }
        };

        // Converts integer to floating-point decimal
        function F(num) {
            return parseFloat(parseFloat(num).toFixed(4))
        };

        // Adds MDL3 buttons
        function addIcon(element, title, icon, click) {
            if (!element.querySelectorAll(`a[title='${title}']`).length) {
                let doci = document.createElement('i'),
                    doca = document.createElement('a');

                // <i> element
                doci.setAttribute('class', icon);
                doci.style = 'padding-top: 0'

                // <a> element
                doca.setAttribute('onclick', click.toString().replace(/(\s|\n)/g, '').replace(/(^function\(\){|};?$)/g, ''));
                doca.title = title;
                doca.classList.add('ml5');
                doca.classList.add('bugin');
                doca.appendChild(doci);
                doca.style = 'height:21px;flex: 0 0 15px;text-align:center'


                // Parent element
                element.appendChild(doca);
            }
        }

        // Show Save Dialog
        function saveWarning() {
            if (Project.saved) {
                return true;
            } else {
                if (isApp) {
                    var answer = electron.dialog.showMessageBoxSync(currentwindow, {
                        type: 'question',
                        buttons: [tl('dialog.save'), tl('dialog.discard'), tl('dialog.cancel')],
                        title: 'Blockbench',
                        message: tl('message.close_warning.message'),
                        noLink: true
                    })
                    if (answer === 0) {
                        BarItems.save_project.trigger();
                    }
                    return answer !== 2;
                } else {
                    var answer = confirm(tl('message.close_warning.web'))
                    return answer;
                }
            }
        }
    }

    // MDL3 Buttons
    {
        // Setting for MDL3 button toggles
        setting_bugin_toggle = new Setting('bugin_toggle', {
            value: 0,
            name: 'Bugin Toggle Default',
            description: 'When checked MDL3 buttons will appear by default'
        });
        // Value for when MDL3 buttons are shown
        Format.bugin_toggle = Settings.get('bugin_toggle');

        function updateButtons() {
            // Delete every button to reset it
            document.querySelectorAll('#outliner div[title="Cube"] a.bugin').forEach(element => element.remove());
            // For every group add each button
            document.querySelectorAll('#cubes_list div[title="Group"]').forEach(element => {

                /*
                // Portal Mesh
                addIcon(element, 'MDL3 Portal Mesh', 'material-icons', (function () {
                    if (Group.all.find(g => g.uuid == this.parentElement.parentElement.id).bugin_mdl3_pm) {
                        Group.all.find(g => g.uuid == this.parentElement.parentElement.id).bugin_mdl3_pm = false
                    } else {
                        Group.all.find(g => g.uuid == this.parentElement.parentElement.id).bugin_mdl3_pm = true
                    };
                }))
                */
                // Disable Shading
                addIcon(element, 'MDL3 Disable Shading', 'material-icons', (function() {
                    if (!Group.all.find(g => g.uuid == this.parentElement.parentElement.id).bugin_mdl3_ds) {
                        Group.all.find(g => g.uuid == this.parentElement.parentElement.id).bugin_mdl3_ds = true;
                    } else {
                        Group.all.find(g => g.uuid == this.parentElement.parentElement.id).bugin_mdl3_ds = false;
                    };
                }))
                // Glow
                addIcon(element, 'MDL3 Glow', '', (function() {
                    if (Group.all.find(g => g.uuid == this.parentElement.parentElement.id).bugin_mdl3_glow) {
                        Group.all.find(g => g.uuid == this.parentElement.parentElement.id).bugin_mdl3_glow = false
                    } else {
                        Group.all.find(g => g.uuid == this.parentElement.parentElement.id).bugin_mdl3_glow = true
                    };
                }))
                // Group toggle
                addIcon(element, 'MDL3 Group', 'material-icons', (function() {
                    if (Group.all.find(g => g.uuid == this.parentElement.parentElement.id).bugin_mdl3_group) {
                        Group.all.find(g => g.uuid == this.parentElement.parentElement.id).bugin_mdl3_group = false
                    } else {
                        Group.all.find(g => g.uuid == this.parentElement.parentElement.id).bugin_mdl3_group = true
                    };
                }))
            });

            if (Format.bugin_toggle) {
                document.querySelectorAll('#outliner div[title="Group"] a.bugin').forEach(element => element.style.display = ''); // Shows buttons if bugin_toggle is on
                // Changes name's width, allowing for more space to type as well as have all the buttons 
                document.querySelectorAll('#outliner.more_options div[title="Group"] input.cube_name').forEach(element => element.style.width = 'calc(100% - 168px - 72px + 20px )');
                document.querySelectorAll('#outliner:not(.more_options) div[title="Group"] input.cube_name').forEach(element => element.style.width = 'calc(100% - 84px - 72px + 20px)');
            } else {
                document.querySelectorAll('#outliner div[title="Group"] input.cube_name').forEach(element => element.style = null); // Resets name bar
                document.querySelectorAll('#outliner div[title="Group"] a.bugin').forEach(element => element.style.display = 'none'); // Hides buttons if bugin_toggle is on
            };

            Group.all.forEach(group => { // Sets each group button to appear what it should be
                // Google icons
                {
                    try {
                        /* document.querySelector(`li[id='${group.uuid}'] a[title='MDL3 Portal Mesh'] i`).innerHTML = group.bugin_mdl3_pm ? 'radio_button_checked' : 'radio_button_unchecked'; */
                    } catch (err) {}
                    try {
                        document.querySelector(`li[id='${group.uuid}'] a[title='MDL3 Disable Shading'] i`).innerHTML = group.bugin_mdl3_ds ? 'brightness_5' : 'brightness_7';
                    } catch (err) {}
                    try {
                        document.querySelector(`li[id='${group.uuid}'] a[title='MDL3 Group'] i`).innerHTML = group.bugin_mdl3_group ? 'create_new_folder' : 'folder_open';
                    } catch (err) {}
                }

                // Font Awesome icons
                {
                    try {
                        document.querySelector(`li[id='${group.uuid}'] a[title='MDL3 Glow'] i`).setAttribute('class', group.bugin_mdl3_glow ? 'fas fa-lightbulb' : 'far fa-lightbulb');
                    } catch (err) {}
                }
            })
        }
        // Activators for reloading buttons
        {
            window.onclick = function() {
                updateButtons()
            };
            window.onmouseup = function() {
                updateButtons()
            };
            window.onkeydown = function(event) {
                if (event.keyCode == 13) {
                    updateButtons()
                }
            };
            Blockbench.on('add_group add_cube', () => {
                updateButtons()
            })
        }

        // Hides/Shows MDL3 buttons based on setting
        Blockbench.on('join_session load_project new_project reset_project', () => {
            Format.bugin_toggle = Settings.get('bugin_toggle')
            if (Format.bugin_toggle) {
                BarItems.bugin_toggle.setIcon('create_new_folder')
            } else {
                BarItems.bugin_toggle.setIcon('folder_open')
            }
        })
    }

    // Exports MDL file
    function Export(format) {
        switch (format) {
            case 1: { // MDL 1
                // Starts folder to be zipped
                let MDL1Zip = new JSZip(),
                    prevSettingST = Format.single_texture;
                Format.single_texture = true

                let model = {
                        'texture_width': Project.texture_width,
                        'texture_height': Project.texture_height,
                        'parts': []
                    },
                    placeholderArray = [{
                        'uuid': 'root',
                        'position': [0, 24, 0],
                        'rotation': [0, 0, 0],
                        'dimension': [0, 0, 0],
                        'xScale': 0,
                        'yScale': 0,
                        'zScale': 0,
                        'offset': [0, 0, 0],
                        'flipTexture': false,
                        'childElements': []
                    }]

                // Add groups to model object
                for (let i = 0; i < Group.all.length; i++) {
                    let group = Group.all[i],
                        object = {
                            'uuid': group.uuid,
                            'position': [-F(group.origin[0]), F(24 - group.origin[1]), F(group.origin[2])],
                            'rotation': [-F(group.rotation[0]), F(group.rotation[1]), F(group.rotation[2])],
                            'dimension': [0, 0, 0],
                            'xScale': 0,
                            'yScale': 0,
                            'zScale': 0,
                            'offset': [0, 0, 0],
                            'flipTexture': false,
                            'texture_offset': [0, 0],
                            'childElements': []
                        }
                    if (group.parent != 'root') {
                        object.position = [-F(group.origin[0] - group.parent.origin[0]), -F(group.origin[1] - group.parent.origin[1]), F(group.origin[2] - group.parent.origin[2])];
                        object.boneParent = group.parent.uuid
                    }
                    placeholderArray.push(object);
                }
                // Adds cubes to model object
                for (let i = 0; i < Cube.all.length; i++) {
                    let cube = Cube.all[i];
                    if (cube.rotation[0] != 0 || cube.rotation[1] != 0 || cube.rotation[2] != 0) { // If cube has rotation
                        let object = {
                            'position': [-F(cube.origin[0]), F(24 - cube.origin[1]), F(cube.origin[2])],
                            'rotation': [-F(cube.rotation[0]), F(cube.rotation[1]), F(cube.rotation[2])],
                            'dimension': [0, 0, 0],
                            'xScale': 0,
                            'yScale': 0,
                            'zScale': 0,
                            'offset': [0, 0, 0],
                            'flipTexture': false,
                            'texture_offset': [0, 0],
                            'childElements': [{
                                'texture_offset': cube.uv_offset,
                                'dimension': [F(cube.size(0, true)), F(cube.size(1, true)), F(cube.size(2, true))],
                                'rotation': [0, 0, 0],
                                'position': [-F(cube.to[0] - cube.origin[0]), F(cube.origin[1] - cube.to[1]), F(cube.from[2] - cube.origin[2])],
                                'offset': [0, 0, 0],
                                'flipTexture': cube.mirror_uv,
                                'xScale': cube.inflate + 1,
                                'yScale': cube.inflate + 1,
                                'zScale': cube.inflate + 1
                            }]
                        }
                        if (cube.parent != 'root') {
                            object.position = [-F(cube.origin[0] - cube.parent.origin[0]), -F(cube.origin[1] - cube.parent.origin[1]), F(cube.origin[2] - cube.parent.origin[2])];
                            placeholderArray.find(bone => bone.uuid == cube.parent.uuid).childElements.push(object);
                        } else {
                            placeholderArray.push(object);
                        }
                    } else { // If cube doesn't have rotation
                        let object = {
                                'texture_offset': cube.uv_offset,
                                'dimension': [F(cube.size(0, true)), F(cube.size(1, true)), F(cube.size(2, true))],
                                'rotation': [0, 0, 0],
                                'position': [-F(cube.to[0]), F(-cube.to[1]), F(cube.from[2])],
                                'offset': [0, 0, 0],
                                'flipTexture': cube.mirror_uv,
                                'xScale': cube.inflate + 1,
                                'yScale': cube.inflate + 1,
                                'zScale': cube.inflate + 1
                            },
                            parent = (cube.parent.uuid) ? cube.parent.uuid : 'root';
                        if (cube.parent != 'root') {
                            object.position = [-F(cube.to[0] - cube.parent.origin[0]), F(cube.parent.origin[1] - cube.to[1]), F(cube.from[2] - cube.parent.origin[2])];
                        }
                        placeholderArray.find(bone => bone.uuid == parent).childElements.push(object);
                    }
                }
                // Add each child to their respective parent
                for (let i = placeholderArray.filter(bone => bone.boneParent != undefined).length - 1; i >= 0; i--) {
                    let object = placeholderArray.filter(bone => bone.boneParent != undefined)[i],
                        uuid = object.boneParent.toString();
                    // removes bone parent key and value
                    delete object.boneParent;
                    // removes uuid we wont be able to reach later
                    delete object.uuid;
                    placeholderArray.filter(element => element.uuid == uuid)[0].childElements.push(object)
                    placeholderArray.splice(placeholderArray.findIndex(element => element == object), 1);
                }

                // If there are no cubes in root, delete root (saves space)
                if (!placeholderArray[0].childElements.length) {
                    placeholderArray.splice(0, 1);
                }

                // removes unparented group's uuid
                for (i = 0; i < placeholderArray.length; i++) {
                    delete placeholderArray[i].uuid
                }

                // sets object data to array
                model.parts = placeholderArray

                // Adds texture file to zip
                MDL1Zip.file('tex.png', Cube.all.random().faces.north.getTexture().getBase64(), {
                    base64: true
                })
                // Adds lightmap
                if (Texture.all.find(tex => tex.name.toLowerCase().includes('lm'))) {
                    MDL1Zip.file('lm.png', Texture.all.find(tex => tex.name.toLowerCase().includes('lm')).getBase64(), {
                        base64: true
                    })
                }

                // Resets format's single texture setting
                Format.single_texture = prevSettingST;

                // Adds data_mdl to zip
                MDL1Zip.file('model.json', JSON.stringify(model))

                new Dialog({
                    title: 'Model data',
                    id: 'mdl_data',
                    resizable: true,
                    width: 650,
                    component: {
                        components: {
                            VuePrismEditor
                        },
                        data: {
                            text: ''
                        },
                        template: `
                            <div>
                                <p> If you don't know what this is, leave it blank <p>
                                <vue-prism-editor id="#mdl_data" v-model="text" language="json" style="height: 25em;" :line-numbers="true" />
                            <div>
                        `
                    },
                    onConfirm: function() {
                        MDL1Zip.file('model_data.json', document.querySelector('#mdl_data .prism-editor-wrapper pre code').innerText)
                        this.hide()
                        // Zips everything and turns to .mdl
                        MDL1Zip.generateAsync({
                            type: 'blob'
                        }).then(content => {
                            Blockbench.export({
                                type: 'Zip Archive',
                                extensions: ['mdl'],
                                savetype: 'zip',
                                content: content,
                                name: Project.name
                            })
                        })
                    }
                }).show()

            };
            break;
        case 3: { // MDL 3
            // Resets everything edited
            Undo.initEdit({
                selection: true,
                elements: Cube.all,
                outliner: true
            });
            // Exports MDL 3
            {
                let MDL3Zip = new JSZip(),
                    groupObject = {},
                    model_data = {
                        'textures': [],
                        'object_data': []
                    };

                Texture.all.forEach(tex => {
                    MDL3Zip.file(`${tex.name.replace(/(\.*)\.[^.]+$/g, '')}.png`, tex.getBase64(), {
                        base64: true
                    })
                    model_data.textures.push(tex.name.replace(/(\.*)\.[^.]+$/gi, ''))
                })
                Cube.all.forEach(cube => {
                    try {
                        cube.name = cube.faces.north.getTexture().uuid
                    } catch (err) {
                        console.error(`${pluginTitle}: cube does not have texture`);
                        new Dialog({
                            title: 'MDL3 WARNING',
                            id: 'mdl3_warning_no_tex',
                            buttons: ['OK'],
                            singleButton: true,
                            lines: [
                                '<p> The plugin has identified no Texture.all on a cube </p>',
                                '<p style="color:#f00"> This will break your MDL file </p>',
                                '<p> Make sure to assign a texture to every cube </p>'
                            ]
                        }).show()
                        return;
                    }
                });
                Group.all.filter(group => group.bugin_mdl3_group).forEach(group => {
                    function findParent(original, group) {
                        if (group.parent == 'root') {
                            groupObject[original.uuid] = 'root'
                        } else if (group.parent.bugin_mdl3_group) {
                            groupObject[original.uuid] = group.parent.uuid
                        } else {
                            findParent(original, group.parent)
                        }
                    };
                    findParent(group, group);
                });

                Texture.all.forEach(tex => {
                    Undo.initEdit({
                        selection: true,
                        elements: Cube.all,
                        outliner: true,
                    });

                    Cube.all.filter(c => c.name != tex.uuid).forEach(c => c.remove());

                    Cube.all.forEach(cube => {
                        function findParent(cube, group) {
                            if (group != 'root') {
                                if (group.bugin_mdl3_group) {
                                    cube.name = group.uuid
                                } else findParent(cube, group.parent)
                            }
                        }
                        findParent(cube, cube.parent)
                    })

                    Group.all.filter(group => group.bugin_mdl3_group).forEach(group => {
                        group.children.forEach(child => {
                            child.select();
                            moveElementsInSpace(-group.origin[0], 0)
                            moveElementsInSpace(-group.origin[1], 1)
                            moveElementsInSpace(-group.origin[2], 2)
                        });
                    })

                    Group.all.filter(group => group.bugin_mdl3_group).forEach(group => {
                        let childGroups = [];
                        group.children.filter(element => element.type == 'group' && element.bugin_mdl3_group).forEach(childGroup => {
                            childGroups.push(childGroup.name);
                        })
                        Undo.initEdit({
                            selection: true,
                            elements: Cube.all,
                            outliner: true,
                        });
                        for (let i = 1; i < group.children.filter(element => element.type == 'cube').length; i++) {
                            let elements = group.children.filter(element => element.type == 'cube');
                            if (elements[i].faces.north.texture != elements[i - 1].faces.north.texture) {
                                console.error(`${pluginTitle}: multiple Texture.all used in one group`)
                                new Dialog({
                                    title: 'MDL3 WARNING',
                                    id: 'mdl3_warning_multi_tex',
                                    buttons: ['OK'],
                                    singleButton: true,
                                    lines: [
                                        '<p> You have multiple Texture.all based in a single MDL3 group </p>',
                                        '<p style="color:#f00"> This will break your MDL file </p>',
                                        '<p> Group off or merge Texture.all to fix </p>'
                                    ]
                                }).show()
                                return;
                            }
                        }
                        while (Cube.all.filter(cube => cube.name != group.uuid).length != 0) {
                            Cube.all.filter(cube => cube.name != group.uuid)[0].remove()
                        }
                        if (!Cube.all.find(e => e.faces.north.texture != tex.uuid)) {
                            model_data.object_data.push({
                                'name': group.name,
                                'texture_index': Texture.all.indexOf(tex),
                                'opacity': 1.0,
                                'portal_mesh': group.bugin_mdl3_pm,
                                'disable_shading': group.bugin_mdl3_ds,
                                'glow': group.bugin_mdl3_glow,
                                'hidden': !group.visibility,
                                'children': childGroups,
                                'transform': [(group.origin[0] * 0.0625).toString(), (group.origin[1] * 0.0625).toString(), (-group.origin[2] * 0.0625).toString()],
                                'rotate': [0, 0, 0],
                                'scale': [1, 1, 1]
                            });
                            MDL3Zip.file(`${group.name}.obj`, Codecs.obj.compile());
                        };
                        Undo.finishEdit(`Removed !${tex.uuid} !${group.uuid} cubes`);
                        Undo.undo();
                    });
                    Undo.finishEdit(`Removed !${tex.uuid} cubes`);
                    Undo.undo();
                })

                MDL3Zip.file('data_mdl.json', JSON.stringify(model_data))
                MDL3Zip.generateAsync({
                    type: 'blob'
                }).then(content => {
                    Blockbench.export({
                        type: 'Zip Archive',
                        extensions: ['mdl'],
                        savetype: 'zip',
                        content: content,
                        name: Project.name
                    })
                })
            }
            // Resets everything edited
            Undo.finishEdit('Export MDL3');
            Undo.undo();
        };
        break;
        }
    }

    // Plugin Register
    Plugin.register('Bugin', {
        title: pluginTitle,
        author: 'Bug1312',
        icon: Blockbench.getIconNode(imgs.mdlx32),
        description: 'Converts models from blockbench to Dalek Mod\'s MDL',
        version: version,
        min_version: '4.0.0',
        variant: 'both',
        about: about,
        oninstall() {
            Blockbench.notification(installNotificationTitle, installNotificationMsg)
        },
        onload() {
            // Mobile warning
            if (Blockbench.isMobile == true) {
                Blockbench.showMessageBox({
                    title: 'Mobile Warning',
                    message: `This device has been identified as a Mobile Device\n\n Due to this, the ${pluginTitle} plugin may not work`
                })
            }

            // Update notification
            fetch(versionPath)
                .then(response => response.json())
                .then(data => {
                    if (data != undefined && data.version > version) {
                        Blockbench.showMessageBox({
                            title: `${pluginTitle} Update!`,
                            message: `The ${pluginTitle} plugin has an update! Would you like to update?`,
                            buttons: ['Open Website', 'Close']
                        }, function(result) {
                            if (result == 0) {
                                window.open(website, '_blank');
                            };
                        })
                    };
                });

            // Check actions
            actionCheck(export_mdl3, 'export_mdl3', MenuBar.menues['file'].structure.find(item => item.name && item.name == 'generic.export').children, 'file.export');
            actionCheck(export_mdl1, 'export_mdl1', MenuBar.menues['file'].structure.find(item => item.name && item.name == 'generic.export').children, 'file.export');
            actionCheck(action_bugin_toggle, 'bugin_toggle', MenuBar.menues['transform'].structure, 'transform');
            actionCheck(action_every_group, 'every_group', MenuBar.menues['filter'].structure, 'filter');
            actionCheck(action_none_group, 'none_group', MenuBar.menues['filter'].structure, 'filter');
        },
        onunload() {},
        onuninstall() {
            // Remove actions
            export_mdl3.delete();
            export_mdl1.delete();
            action_bugin_toggle.delete();
            action_every_group.delete();
            action_none_group.delete();
        }
    });
})();