new Chart(document.getElementById("myChart"), {
  type: 'pie',
  data: {
    labels: ["Dr. Ghani", "Dr. Abdullah", "Other"],
    datasets: [{
      data: [923864,720988,179539],
      backgroundColor: ["#1a9641", "#a6d96a","#ffffbf"],
      borderColor: "red",
      borderWidth: 0.3,
      hoverBackgroundColor:'#ffef',
    }]
  },
  options:{
    animation: {
      duration: 0
  }
  }
});