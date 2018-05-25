var makeSovog = function() {
    var color_string = [0,1,2,3,4,5,6,7,8,9,"a","b","c","d","e","f"];
    var createColor = function(range) {
        var color = "#";
        for (var i = 0; i < 6; i++) {
            if (range) {
                switch (range) {
                    case "light":
                        color += color_string[(Math.floor(Math.random()*6)) + 10];
                        break;
                    case "light":
                        color += color_string[(Math.floor(Math.random()*6)) + 5];
                        break;
                    case "dark":
                        color += color_string[Math.floor(Math.random()*6)];
                        break;
                    default:
                        color += color_string[Math.floor(Math.random()*16)];
                        break;
                }
            }
            else {
                color += color_string[Math.floor(Math.random()*16)];
            }
        }
        return color;
    };
    var randomColor = function() {
        var colors = ["FFD230","FFBF52","EDCC82","DCD8B2","DCCDBC","88B2AE","5F8B9C","4C6185","404165","D1B305","A49286","E0D1B4","BDD9D6","BDA0A0","B8D0DE","9FC2D6","86B4CF","73A2BD","6792AB"];
        return "#"+ colors[Math.floor(Math.random() * colors.length)];
    }
    var attrs = ["meaty","spikes","skinny","short","tall","shifty-eyes","jumping"],
        rare_attrs = ["flex","sitting","shifty","bouncy","blink","sad","dopey","happy","angry","shifting","closed-mouth","little","big"],
        super_rare_attrs = ["giant","tiny","wide-open-mouth"],
        which_attrs = [];
    for (var i = 0, len = attrs.length; i < len; i++) {
        if (Math.floor(Math.random ()* 2)) {
            which_attrs.push(attrs[i]);
        }
    }
    for (var i = 0, len = rare_attrs.length; i < len; i++) {
        if (Math.floor(Math.random ()* 1.5)) {
            which_attrs.push(rare_attrs[i]);
        }
    }
    for (var i = 0, len = rare_attrs.length; i < len; i++) {
        if (Math.floor(Math.random ()* 1.1)) {
            which_attrs.push(super_rare_attrs[i]);
        }
    }
    var container = $("#sovogs"),
        looking_options = [(Math.random() * 1.6) + "em", (-(Math.random() * 6) + "em")],
        looking = looking_options[Math.floor(Math.random() * 2)],
        // body_color = createColor(),
        // eye_color = createColor(),
        speeds = ["x-slow","slow","normal","fast","x-fast"],
        speed = speeds[Math.floor(Math.random() * speeds.length)],
        light_color = randomColor(),
        dark_color = randomColor(),
        eye_color = randomColor(),
        border_color = "#eaeaea";

    var element = "";
    element += '<div class="wrapper"><div class="sovog';
    if (which_attrs) {
        for (var i = 0, len = which_attrs.length; i < len; i++) {
            element += (' ' + which_attrs[i]);
        }
    }
    element += " " + speed
    element += '"><div class="head"><div class="top"><div class="base" style="background: '+ light_color +';"></div><div class="antennae left"><div class="ball" style="background: '+ dark_color +';"></div></div><div class="antennae right"><div class="ball" style="background: '+ dark_color +';"></div></div></div><div class="face" style="background: '+ dark_color +';"><div class="left-side" style="background: '+ dark_color +';"></div><div class="right-side" style="background: '+ dark_color +';"></div></div><div class="eye left"><div class="eyelid" style="background: '+ light_color +';"></div><div class="eyelid-two" style="background: '+ light_color +';"></div><div class="eyeball" style="margin-left: '+ looking +'; background: '+ eye_color +';"></div></div><div class="eye right"><div class="eyelid" style="background: '+ light_color +';"></div><div class="eyelid-two" style="background: '+ light_color +';"></div><div class="eyeball" style="margin-left: '+ looking +'; background: '+ eye_color +';"></div></div><div class="mouth"></div></div><div class="neck" style="background: '+ light_color +';"></div><div class="body"><div class="torso" style="background: '+ dark_color +';"><div class="left-side" style="background: '+ dark_color +';"></div><div class="right-side" style="background: '+ dark_color +';"></div></div><div class="shoulder left"></div><div class="shoulder right"></div><div class="arm left" style="border-left-color: '+ light_color +';"><div class="elbow"></div><div class="hand" style="background: '+ dark_color +';"></div></div><div class="arm right" style="border-right-color: '+ light_color +';"><div class="elbow"></div><div class="hand" style="background: '+ dark_color +';"></div></div><div class="leg left" style="background: '+ light_color +';"><div class="knee"></div><div class="foot" style="background: '+ dark_color +';"></div></div><div class="leg right" style="background: '+ light_color +';"><div class="knee"></div><div class="foot" style="background: '+ dark_color +';"></div></div></div></div></div>';
    container.append(element);
}

$("#make-sovog").click(function(){
    makeSovog();
})

    makeSovog();
    makeSovog();
    makeSovog();

