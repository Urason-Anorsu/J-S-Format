let userInputs = {};

function testing() {
    document.writeln("Here is your output! Copy paste it into the system:         ")

    if (userInputs.ProductType == 'Liquor') {
        if (userInputs.ProductFlavor == null || "" || undefined) {
            var output = userInputs.ProductName + " (" + userInputs.Size + ")";
        } else {
            var output = userInputs.ProductName + ": " + userInputs.ProductFlavor + " (" + userInputs.Size + ")";
        }
    } else if (userInputs.ProductType == 'Beer') {
        if (userInputs.ProductFlavor == null || "" || undefined) {
            var output = userInputs.ProductName + " - " + userInputs.BeerPackSize + " " + userInputs.Type + " (" + userInputs.Size + ")";
        } else {
            var output = userInputs.ProductName + ": " + userInputs.ProductFlavor + " - " + userInputs.BeerPackSize + " " + userInputs.Type + " (" + userInputs.Size + ")";
        }
    } else if (userInputs.ProductType == 'Tobacco') {
        var output = userInputs.ProductName + ": " + userInputs.ProductFlavor + " - " + userInputs.Type
    }



    document.writeln(output);
}

document.getElementById('productType').addEventListener('change', function () {
    // Get the selected product type
    const selectedProduct = this.value;
    userInputs['ProductType'] = selectedProduct;

    // Hide all sections by default
    document.getElementById('ProductName').style.display = 'none';
    document.getElementById('ProductFlavor').style.display = 'none';

    document.getElementById('BeerSize').style.display = 'none';
    document.getElementById('LiquorSize').style.display = 'none';
    document.getElementById('TobaccoSize').style.display = 'none';

    document.getElementById('BeerType').style.display = 'none';
    document.getElementById('BeerPackSize').style.display = 'none';

    // Show only Step 4 if "Beer" is selected
    if (selectedProduct === 'Beer') {
        document.getElementById('ProductName').style.display = 'block';
        document.getElementById('ProductFlavor').style.display = 'block';

        document.getElementById('BeerSize').style.display = 'block';
        document.getElementById('BeerType').style.display = 'block';
        document.getElementById('BeerPackSize').style.display = 'block';
    }

    else if (selectedProduct === 'Liquor') {
        document.getElementById('ProductName').style.display = 'block';
        document.getElementById('ProductFlavor').style.display = 'block';
        document.getElementById('LiquorSize').style.display = 'block';
    }
    else if (selectedProduct === 'Tobacco') {
        document.getElementById('ProductName').style.display = 'block';
        document.getElementById('ProductFlavor').style.display = 'block';
        document.getElementById('TobaccoSize').style.display = 'block';
    }

    // Event listener for product name input change
    document.getElementById('PN').addEventListener('input', function () {
        userInputs['ProductName'] = this.value;
    });

    // Event listener for product flavor input change
    document.getElementById('PF').addEventListener('input', function () {
        userInputs['ProductFlavor'] = this.value;
    });

    // Event listener for Beer size input change
    document.getElementById('BS').addEventListener('input', function () {
        userInputs['Size'] = this.value;
    });

    // Event listener for Liquor size input change
    document.getElementById('LS').addEventListener('input', function () {
        userInputs['Size'] = this.value;
    });

    // Event listener for Tobacco size input change
    document.getElementById('TS').addEventListener('input', function () {
        userInputs['Type'] = this.value;
    });

    // Event listener for Beer type input change
    document.getElementById('BT').addEventListener('input', function () {
        userInputs['Type'] = this.value;
    });

    // Event listener for Beer pack size input change
    document.getElementById('BPS').addEventListener('input', function () {
        userInputs['BeerPackSize'] = this.value;
    });
});
// Initial setup to ensure the page loads with all steps hidden
window.addEventListener('load', function () {
    document.getElementById('ProductName').style.display = 'none';
    document.getElementById('ProductFlavor').style.display = 'none';

    document.getElementById('BeerSize').style.display = 'none';
    document.getElementById('LiquorSize').style.display = 'none';
    document.getElementById('TobaccoSize').style.display = 'none';

    document.getElementById('BeerType').style.display = 'none';
    document.getElementById('BeerPackSize').style.display = 'none';

});