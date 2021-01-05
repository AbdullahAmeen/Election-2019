new Chart(document.getElementById("myChart"), {
  type: 'pie',
  data: {
    labels: ["Dr. Ghani", "Dr. Abdullah", "Other"],
    datasets: [{
      data: [923864,720988,179539],
      backgroundColor: ["#253498", "#2c7fb8","#ffffcc"],
      borderColor: "purple",
      borderWidth: 0.5,
      hoverBackgroundColor:'#ffgf',
    }]
  },
  options:{
    animation: {
      duration: 0
  }
  }
});