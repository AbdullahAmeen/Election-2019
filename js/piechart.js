		$(document).ready(function(){
				var ctx = $("#mycanvas").get(0).getContext("2d");

				var data = [
					{
						value: 923864,
						color: "#58508d",
						highlight: "#003f5c",
						label: "Dr. Ghani"
					},
					{
						value: 720988,
						color: "#3292b0",
						highlight: "#6fefff",
						label: "Dr. Abdullah"
					},
					{
						value: 179539,
						color: "orange",
						highlight: "darkblue",
						label: "Other"
					}
				];
				var piechart = new Chart(ctx).Pie(data);
			});