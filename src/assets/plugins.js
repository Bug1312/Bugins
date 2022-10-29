export default {
  plugins: [
    {
      name: "DMJavaJSON",
      image: {
        type: "fontawesome",
        image: "fas fa-bug",
      },
      description: "Imports and Exports the JavaJSON model format found in various mods",
      docs: "https://bug.swdteam.com",
      download: {
        url: "https://bug.swdteam.com",
      },
    },
    {
      name: "Cardinal",
      image: {
        type: "google",
        image: "border_outer",
      },
      description:
        "Adds in all cardinal directions on the grid and renders them on-top of everything while facing you",
      docs: null,
      download: {
        url: "/plugins/files/cardinal.js",
        file: "cardinal.js",
      },
    },
    {
      name: "Blocky Forever",
      image: {
        type: "url",
        image: "blocky",
      },
      description:
        "Brings JannisX11's April Fools Blocky feature back into BlockBench!",
      docs: null,
      download: {
        url: "/plugins/files/blocky_forever.js",
        file: "blocky_forever.js",
      },
    },
    {
      name: "Techne Cube",
      image: {
        type: "google",
        image: "view_in_ar",
      },
      description: "Adds the classic Techne wood block to the scene",
      docs: null,
      download: {
        url: "/plugins/files/techne_cube.js",
        file: "techne_cube.js",
      },
    },
    {
      name: "Random Colour",
      image: {
        type: "fontawesome",
        image: "fas fa-palette",
      },
      description: "Randomly colours selected cubes with this handy new tool!",
      docs: null,
      download: {
        url: "/plugins/files/random_colour_tool.js",
        file: "random_colour_tool.js",
      },
    },
    {
      name: "MDL Exporter",
      image: {
        type: "url",
        image: "mdl",
      },
      description:
        "Export Dalek Mod's old MDL format directly from BlockBench!",
      docs: "/docs/mdl",
      download: {
        url: "/plugins/files/Bugin.js",
        file: "Bugin.js",
      },
    },
    {
      name: "BOBJ Importer",
      image: {
        type: "google",
        image: "insert_drive_file",
      },
      description:
        "Allows you to import obj files before BlockBench's 4.0 Update ( A few steps necessary to set up )",
      docs: null,
      download: {
        url: "/plugins/files/bobj_importer.js",
        file: "bobj_importer.js",
      },
      deprecated: 'Not compatible with BlockBench version +4',
    },
    {
      name: "Mo' Shapes",
      image: {
        type: "fontawesome",
        image: "fas fa-shapes",
      },
      description:
        "Adds 'illegal' shapes to Blockbench for you to show your friends your crazy side!\nCreated before BlockBench's 4.0 Update",
      docs: "/docs/moshapes",
      download: {
        url: "/plugins/files/mo_shapes.js",
        file: "mo_shapes.js",
      },
      deprecated: 'Useless with BlockBench\'s OBJ import',

    },
  ]
}