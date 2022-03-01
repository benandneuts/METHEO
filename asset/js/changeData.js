

document.getElementById('Jmoins').addEventListener('click', function(e) { 
	if(parseInt(daySet.replace('fcst_day_', '')) > 0) {
		daySet = "fcst_day_" + (parseInt(daySet.replace('fcst_day_', '')) - 1).toString();
	} else {
		daySet = "fcst_day_4";
	}
    if(parseInt(daySetmin.replace('fcst_day_', '')) > 0) {
       daySetmin = "fcst_day_" + (parseInt(daySetmin.replace('fcst_day_', '')) - 1).toString();
    } else {
       daySetmin = "fcst_day_4";
    }
    if(parseInt(daySetmax.replace('fcst_day_', '')) > 0) {
       daySetmax = "fcst_day_" + (parseInt(daySetmax.replace('fcst_day_', '')) - 1).toString();
    } else {
       daySetmax = "fcst_day_4";
    }
	console.log(daySet);
	setHTML(jsonGlobalFile);
});

document.getElementById('Jplus').addEventListener('click', function(e) {
	if(parseInt(daySet.replace('fcst_day_', '')) < 4) {
		daySet = "fcst_day_" + (parseInt(daySet.replace('fcst_day_', '')) + 1).toString();
	} else {
		daySet = "fcst_day_0";
	}
    if(parseInt(daySetmin.replace('fcst_day_', '')) < 4) {
       daySetmin = "fcst_day_" + (parseInt(daySetmin.replace('fcst_day_', '')) + 1).toString();
    } else {
       daySetmin = "fcst_day_0";
    }
    if(parseInt(daySetmax.replace('fcst_day_', '')) < 4) {
       daySetmax = "fcst_day_" + (parseInt(daySetmax.replace('fcst_day_', '')) + 1).toString();
    } else {
       daySetmax = "fcst_day_0";
   }
	setHTML(jsonGlobalFile);
});


  //  document.getElementById('Jmoins').addEventListener('click', function(e) {
    //    setHTML(jsonGlobalFile);
    //});




document.getElementById('Hmoins').addEventListener('click', function(e) {
	if(parseInt(hourSet.replace('H00', '')) > 0) {
		hourSet = (parseInt(hourSet.replace('H00', '')) - 1).toString() + "H00";
	} else {
		hourSet = "23H00";
	}
	setHTML(jsonGlobalFile);
});

document.getElementById('Hplus').addEventListener('click', function(e) {
	if(parseInt(hourSet.replace('H00', '')) < 23) {
		hourSet = (parseInt(hourSet.replace('H00', '')) + 1).toString() + "H00";
	} else {
		hourSet = "0H00";
	}
	setHTML(jsonGlobalFile);
});