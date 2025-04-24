function showContent(sectionId) {
    const sections = document.querySelectorAll('.main-section');
    sections.forEach(sec => sec.style.display = 'none');
    document.getElementById(sectionId).style.display = 'block';
  }
  
  function updateAalborgTime() {
    const now = new Date();
  
    const options = {
      timeZone: 'Europe/Copenhagen',
      hour: '2-digit',
      minute: '2-digit',
      hour12: false,
    };
  
    const formatter = new Intl.DateTimeFormat([], options);
    const formattedTime = formatter.format(now);
  
    document.getElementById("aalborg-time").textContent =
      `MY TIME: ${formattedTime}`;
  }
  
  setInterval(updateAalborgTime, 1000);
  updateAalborgTime();
  