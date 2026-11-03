const $sbMem = {
  Pablo:{
    fullN: 'John Paulo Nase',
    stageN: 'Pablo',
    position: 'Leader, Rapper, Vocalist, Creative Director',
    info: 'He writes and produces much of SB19’s music, shaping their sound and lyrical depth. Pablo is admired for his strong leadership and vision, guiding the group through their creative journey.',
  },
  Josh:{
    fullN: 'Josh Cullen Santos',
    stageN: 'Josh',
    position: 'Lead Rapper, Lead Dancer',
    info: 'Known for his charisma and sharp stage presence, Josh brings energy and confidence to performances. He also explores solo projects, blending rap with modern pop and hip-hop influences.',
  },
  Stell:{
    fullN: 'Stellvester Ajero',
    stageN: 'Stell',
    position: 'Main Vocalist, Choreographer',
    info: 'Recognized for his wide vocal range and emotional delivery, Stell often handles vocal arrangements. He contributes choreography ideas and is praised for his playful personality and artistry.',
  },
  Ken:{
    fullN: 'Felip Jhon Suson',
    stageN: 'Ken',
    position: 'Main Dancer, Vocalist',
    info: 'He brings a unique, experimental style to both group and solo work. Ken is known for his deep voice, bold fashion sense, and creative risk-taking that expands SB19’s artistry.',
  },
  Justin:{
    fullN: 'Justin de Dios',
    stageN: 'Justin',
    position: 'Sub-Vocalist, Visual, Youngest Member',
    info: 'He contributes to SB19’s creative direction, often designing visuals and concepts. Justin is admired for his artistic eye, multimedia skills, and ability to balance youthful charm with professionalism.',
  }
}


function sbMem(memberKey){
  const container = document.getElementById('sb-mem-info');
  container.innerHTML = '';

  const member = $sbMem[memberKey];
  if(member){
    const div = document.createElement('div');
    div.className = 'info-card';
    div.id = `sb-${member.stageN.toLowerCase()}`;

    const h1 = document.createElement('h1');
    h1.textContent = member.fullN;
    div.appendChild(h1);

    const hr = document.createElement('hr');
    div.appendChild(hr);

    const p = document.createElement('p');
    p.innerHTML = `<strong>Stage Name:</strong> ${member.stageN}`;
    div.appendChild(p);

    const pos = document.createElement('p');
    pos.innerHTML = `<strong>Position:</strong> ${member.position}`;
    div.appendChild(pos);

    const info = document.createElement('p');
    info.textContent = member.info;
    div.appendChild(info);

    container.appendChild(div);
  }
}