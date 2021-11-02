function indicwidth(newid, propor) {
    document.getElementById(newid).style.height = propor*window.innerWidth/1920 + "px";
} function parallax(idname, nameElement, urlN, margN, deslc, direct, time) {
    var secidname = document.getElementById(idname);
    secidname.style.position = "relative";
    for(var m = 0; m < urlN.length; m++) {
        var element = document.createElement(urlN[m][0]);
        element.src = urlN[m][1];
        element.style.width = margN[m][0] + "%";
        element.style.marginLeft = margN[m][1] + "%";
        element.style.marginTop = margN[m][2] + "%";
        element.style.position = "absolute";
        if(Array.isArray(time) == false) {
            element.style.transition = "margin-top " + time + "s, margin-left " + time + "s";
        } else if(Array.isArray(time) == true) {
            element.style.transition = "margin-top " + time[m] + "s, margin-left " + time[m] + "s";
        } element.id = nameElement[m];
        document.getElementById(idname).appendChild(element);
    } document.getElementById(idname).onmousemove = function(event) {
        var conddirect = Array.isArray(direct);
        for(var n = 0; n < nameElement.length; n++) {
            var valordeslcx;
            var valordeslcy;
            if(Array.isArray(deslc[n]) == true) {
                valordeslcx = Math.abs(deslc[n][0]);
                valordeslcy = Math.abs(deslc[n][1]);
            } else if(Array.isArray(deslc[n]) == false) {
                valordeslcx = Math.abs(deslc[n]);
                valordeslcy = Math.abs(deslc[n]);
            } var directx;
            var directy;
            if(conddirect == false) {
                directx = direct;
                directy = direct;
            } else if(conddirect == true) {
                if(Array.isArray(direct[n]) == true) {
                    directx = direct[n][0];
                    directy = direct[n][1];
                } else if(Array.isArray(direct[n]) == false) {
                    directx = direct[n];
                    directy = direct[n];
                }
            } document.getElementById(nameElement[n]).style.marginLeft = (Math.pow(-1, directx)*(window.innerWidth/2 - event.clientX)*valordeslcx/window.innerWidth + margN[n][1]) + "%";
            document.getElementById(nameElement[n]).style.marginTop = (Math.pow(-1, directy)*(parseFloat(document.getElementById(idname).style.height)/2 - event.clientY)*valordeslcy/parseFloat(document.getElementById(idname).style.height) + margN[n][2]) + "%";
        }
    }
} function factr(value) {
    var factnum = 1;
    for(var l = 1; l <= value + 1; l++) {
        factnum *= l;
    } if(value >= 0) {
        if(value == Math.floor(value)) {
            return (factnum/(value + 1));
        } else {
            return "Função gama";
        }
    } else if(value < 0) {
        return "Indefinido";
    }
}
