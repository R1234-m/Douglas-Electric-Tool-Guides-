document.addEventListener('DOMContentLoaded', () => {
  const yearNode = document.getElementById('year');
  if (yearNode) {
    yearNode.textContent = new Date().getFullYear();
  }

  const menuToggle = document.querySelector('.menu-toggle');
  const nav = document.querySelector('.site-nav');

  if (menuToggle && nav) {
    menuToggle.addEventListener('click', () => {
      nav.classList.toggle('open');
    });
  }

  const toolsToggle = document.getElementById('toolsToggle');
  const toolList = document.getElementById('toolList');
  const toolButtons = document.querySelectorAll('.tool-choice');
  const detailTitle = document.getElementById('detailTitle');
  const detailVideo = document.getElementById('detailVideo');
  const detailManuals = document.getElementById('detailManuals');
  const detailTrouble = document.getElementById('detailTrouble');
  const detailParts = document.getElementById('detailParts');
  const detailSafety = document.getElementById('detailSafety');

  const toolData = {
    vm810: {
      title: 'Vivax Metrotech VM-810 / VM-850 Pipe & Cable Locator',
      video: 'Official Vivax Metrotech operator resources for the VM-810 / VM-850, including setup, locating workflow, battery management, and troubleshooting.',
      videoLink: 'https://www.vivax-metrotech.com/wp-content/uploads/2021/03/VM-810-VM-850-User-Handbook-VXMT-Eng-V2.1-Publish-20210318.pdf',
      manuals: [
        'VM-810 / VM-850 user handbook (PDF)',
        'Battery charging and maintenance guide',
        'Daily inspection and startup checklist'
      ],
      troubleshooting: [
        'Signal loss and interference checks',
        'Battery faults, charging problems, and power cycling',
        'Antenna, cable, and calibration issues',
        'Screen errors and software reset steps'
      ],
      parts: [
        'Battery pack and charger',
        'Signal cable and connector kit',
        'Antenna and accessory adapters',
        'Carry case, headset, and locator accessories'
      ],
      safety: [
        'Verify utility locates and mark the work zone',
        'Inspect the locator and cables before every use',
        'Use PPE and follow utility-safe operating procedures'
      ]
    },
    fusion: {
      title: 'Fusion Machine',
      video: 'Heat setup, safe operation, and shutdown workflow for the fusion process.',
      manuals: ['Operator setup guide', 'Temperature reference sheet', 'Maintenance checklist'],
      troubleshooting: ['Heat inconsistency', 'Power connection faults', 'Alignment and timing issues'],
      parts: ['Heating element', 'Clamp set', 'Power cable', 'Connector accessories'],
      safety: ['Wear insulated gloves', 'Keep the work area clear', 'Inspect cords and connectors before operation']
    },
    vacuum: {
      title: 'Vacuum Excavator',
      video: 'Daily inspection, safe excavation setup, and basic operating steps.',
      manuals: ['Daily operating checklist', 'Hydro setup guide', 'Service interval sheet'],
      troubleshooting: ['Pressure loss', 'Hose blockage', 'Suction performance issues'],
      parts: ['Hoses', 'Filters', 'Seals', 'Nozzles'],
      safety: ['Complete pre-start inspection', 'Check pressure and fluid levels', 'Keep personnel away from active suction points']
    },
    mini: {
      title: 'Mini Excavator',
      video: 'Startup, hydraulics, controls, and transport safety lesson.',
      manuals: ['Operator manual', 'Fluid and filter checklist', 'Transport and storage guide'],
      troubleshooting: ['Warning lights', 'Control lag', 'Hydraulic pressure loss'],
      parts: ['Filters', 'Belts', 'Service kit', 'Hydraulic fittings'],
      safety: ['Inspect stabilizers and guards', 'Confirm seat belt use', 'Never operate with a known fault']
    },
    drill: {
      title: 'Directional Drill',
      video: 'Planning, setup, drilling operation, and shutdown guidance.',
      manuals: ['Setup and alignment checklist', 'Drill planning guide', 'Maintenance interval sheet'],
      troubleshooting: ['Steering drift', 'Power loss', 'Drill head jams'],
      parts: ['Drill head accessories', 'Guide rods', 'Power connectors', 'Lubrication kit'],
      safety: ['Confirm underground utility locations', 'Inspect the drill path', 'Keep bystanders outside the exclusion zone']
    },
    generator: {
      title: 'Generator',
      video: 'Startup, power monitoring, and shutdown for portable power use.',
      manuals: ['Startup and shutdown guide', 'Fuel and maintenance notes', 'Load planning sheet'],
      troubleshooting: ['Low output', 'Starter faults', 'Fuel delivery issues'],
      parts: ['Fuel filter', 'Spark plug', 'Battery', 'Outlet panel components'],
      safety: ['Check fuel storage and ventilation', 'Use grounded connections', 'Never overload the generator']
    }
  };

  const renderTool = (toolKey) => {
    const selected = toolData[toolKey] || toolData.vm810;
    detailTitle.textContent = selected.title;
    if (selected.videoLink) {
      detailVideo.innerHTML = `<strong>${selected.video}</strong><br><a href="${selected.videoLink}" target="_blank" rel="noopener noreferrer">Open Vivax Metrotech handbook and resources</a>`;
    } else {
      detailVideo.textContent = selected.video;
    }
    detailManuals.innerHTML = selected.manuals.map((item) => `<li>${item}</li>`).join('');
    detailTrouble.innerHTML = selected.troubleshooting.map((item) => `<li>${item}</li>`).join('');
    detailParts.innerHTML = selected.parts.map((item) => `<li>${item}</li>`).join('');
    detailSafety.innerHTML = selected.safety.map((item) => `<li>${item}</li>`).join('');
  };

  toolButtons.forEach((button) => {
    button.addEventListener('click', () => {
      toolButtons.forEach((item) => item.classList.remove('active'));
      button.classList.add('active');
      renderTool(button.dataset.tool);
    });
  });

  if (toolsToggle && toolList) {
    toolsToggle.addEventListener('click', () => {
      toolList.classList.toggle('open');
    });
  }

  renderTool('vm810');
});
