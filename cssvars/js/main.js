(function(){
    
    var variables = {
        'font-family': 'Arial, Helvetica, sans-serif',
        'font-size': '1em',
        'main-color': 'orangered',
        'secondary-color': 'purple',
        'back-color': 'whitesmoke',
        'container-width': '1090px',
        'box-size': '100px',
        'box-scale': '1',
        'box-color': 'var(--secondary-color)',
        'box-position-x': '0%',
        'box-scale-active': '2',
        'box-color-active': 'var(--main-color)',
        'box-position-x-active': '300%'
    };
    
    var inputsByName = {};
    
    var styleElement = document.querySelector('style');
    
    var inputsContainer = document.querySelector('#inputs-container');
    var inputsResult = document.querySelector('#inputs-result');
    
    var buildStyle = function() {
        var result = ":root {\n";
        for(var i in variables) {
            result += "  --" + i + ": " + variables[i] + ";\n";
        }
        result += "}";
        return result;
    }
    
    var updateStyle = function() {
        for(var i in variables) {
            variables[i] = inputsByName[i].value;
        }
        styleElement.textContent = inputsResult.textContent = buildStyle();
    }
    
    var createInput = function(name, value) {
        var div = document.createElement('div');
        var label = document.createElement('label');
        var input = document.createElement('input');
        label.textContent = name + ": ";
        input.setAttribute('type', 'text');
        input.setAttribute('value', value);
        div.appendChild(label);
        div.appendChild(input);
        
        input.addEventListener('input', updateStyle);
        inputsByName[name] = input;
        
        return div;
    }
    
    var createInputs = function() {
        for(var i in variables) {
            inputsContainer.appendChild(createInput(i, variables[i]));
        }
    }
    
    createInputs();
    updateStyle();
    
})();