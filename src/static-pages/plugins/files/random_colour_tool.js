(function () {
    var randomColourAction = new Action({
        id: 'randomColour',
        name: 'Random Colour Tool',
        icon: Blockbench.getIconNode('palette'),
        description: 'Changes selected cubes to a random marker colour',
        category: 'filter',
        click: function () {
            for (let i = 0; i < Cube.selected.length; i++) {
                Cube.selected[i].color = Math.floor(Math.random() * 8)
            }
            Undo.initEdit({
                selection: true,
                outliner: true,
                elements: Cube.selected
            });
            for (let i = 0; i < Cube.selected.length;) {
                Cube.selected[i].remove();
            }
            Undo.finishEdit('deleted selected elements');
            Undo.undo();
        }
    })
    Plugin.register('random_colour_tool', {
        title: 'Random Colour',
        author: 'Bug1312',
        icon: Blockbench.getIconNode('palette'),
        description: 'Randomly sets selected cube\'s colours',
        version: '0.0.1',
        variant: 'both',
        onload() {
            if(MenuBar.menues.filter.structure.find(action=>action.id == "randomColour") == undefined){
                MenuBar.addAction(randomColourAction, 'filter')
            }
        },
        onunload() {
            //this.onuninstall();
        },
        onuninstall() {
            randomColourAction.delete()
        }
    });
})();