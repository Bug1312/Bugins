if (document.title == 'Blockbench-MDL Exporter') {
    document.querySelector("body > div.wy-grid-for-nav > section > div > div > div:nth-child(2)").innerHTML +=
        `<div class="toctree-wrapper compound">
        <p class="caption"><span class="caption-text">Contents:</span></p>
        <ul>
            <li class="toctree-l1"><a class="reference internal" href="./first-steps">First Steps</a>
                <ul>
                    <li class="toctree-l2"><a class="reference internal" href="./first-steps#installing-the-plugin">Installing the plugin</a></li>
                    <li class="toctree-l2"><a class="reference internal" href="./first-steps#uninstalling-the-plugin">Uninstalling the plugin</a></li>
                </ul>
            </li>
            <li class="toctree-l1"><a class="reference internal" href="./exporting">Exporting</a>
                <ul>
                    <li class="toctree-l2"><a class="reference internal" href="./exporting#creating-the-mdl">Creating the MDL</a></li>
                </ul>
            </li>
            <li class="toctree-l1"><a class="reference internal" href="./setting-up">How to set up MDLs</a>
                <ul>
                    <li class="toctree-l2"><a class="reference internal" href="./setting-up#mdl3">MDL3</a></li>
                    <li class="toctree-l2"><a class="reference internal" href="./setting-up#mdl1">MDL1</a></li>
                </ul>
            </li>
            <li class="toctree-l1"><a class="reference internal" href="./mdl3-tools">MDL 3 Tools</a>
                <ul>
                    <li class="toctree-l2"><a class="reference internal" href="./mdl3-tools#mdl3-group">MDL3
                            Group</a></li>
                    <li class="toctree-l2"><a class="reference internal" href="./mdl3-tools#mdl3-glow">MDL3
                            Glow</a></li>
                    <li class="toctree-l2"><a class="reference internal" href="./mdl3-tools#mdl3-disable-shading">MDL3 Disable Shading</a></li>
                </ul>
            </li>
            <li class="toctree-l1"><a class="reference internal" href="./other-tools">Other Tools</a>
                <ul>
                    <li class="toctree-l2"><a class="reference internal" href="./other-tools#set-all-mdl3-group">Set all MDL3 Group</a></li>
                    <li class="toctree-l2"><a class="reference internal" href="./other-tools#remove-all-mdl3-groups">Remove all MDL3 Groups</a></li>
                </ul>
            </li>
        </ul>
    </div>`;
    document.querySelector("body > div > section > div > div > footer > div:nth-child(3)").innerHTML = '<p> © Copyright 2020, Bug1312.</p>'
}

document.head.innerHTML += `
<meta property="og:title" content="Blockbench MDL Exporter">
<meta property="og:description" content="Documentation for Bug1312's Blockbench MDL Exporter">
<meta property="og:image" content="/main/images/plugins/mdl.png">
`;
