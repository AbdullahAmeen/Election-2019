new Chart(document.getElementById("myChart"), {
  type: 'pie',
  data: {
    labels: ["Dr. Ghani", "Dr. Abdullah", "Other"],
    datasets: [{
      data: [923864,720988,179539],
      backgroundColor: ["#071a84", "#6c79c6","#3ac8ef"],
      borderColor: "black",
      borderWidth: 0.5,
      hoverBackgroundColor:'#ffef',

    }]
  },
  options:{
    animation: {
      duration: 0
  }
  }
});
