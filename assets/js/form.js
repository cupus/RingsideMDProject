$(function() {
	function p() {
		var row1 = $("#rs-ca-calc-row-1"),
			row2 = $("#rs-ca-calc-row-2"),
			row3 = $("#rs-ca-calc-row-3"),
			row11 = $("#rs-ca-calc-row-11"),
			row22 = $("#rs-ca-calc-row-22"),
			row33 = $("#rs-ca-calc-row-33"),
			arr1 = [row1,row2,row3],
			arr2 = [row11,row22,row33];

		for(i=0,len=arr1.length;i<len;i++) {
			arr1[i].css("height","");
			arr2[i].css("height","");

			if(arr1[i].outerHeight() >= arr2[i].outerHeight()) {
				arr2[i].css("height",arr1[i].outerHeight());
			} else {
				arr1[i].css("height",arr2[i].outerHeight());
			}
		}
	}

    $(window).resize(function() {
        if(document.documentElement.clientWidth > 960) {
            p()
        }
    });

    function d() {
		var body = $("html, body"),
			btnGetMyReport = $("#btnGetMyReport"),
            windowRegistration = $("#windowRegistration"),
            btnGoBack = $("#btnGoBack"),
            bgPopup = $("#bgPopup");

        btnGetMyReport.on("click", function() {
            body.animate({scrollTop: 0},500);
            bgPopup.show();
            windowRegistration.show();
        })

        btnGoBack.on("click", function() {
            windowRegistration.hide();
            bgPopup.hide();
        })
    }

    function initSlider() {
        var numberEmployees = $("#numberEmployees"),
            salaryEmployee = $("#salaryEmployee"),
            employeeSickDays = $("#employeeSickDays"),
            employeeWorkSick = $("#employeeWorkSick"),
            employeeAllowance = $("#employeeAllowance"),
            chronicDisease = $("#chronicDisease"),
            totalCost = $("#totalCost"),
            totalSavings = $("#totalSavings"),
            chronicDiseaseValue = $("#chronicDiseaseValue"),
            totalCostValue = $("#totalCostValue"),
            totalCostValue2 = $("#totalCostValue2"),
            totalSavingsValue = $("#totalSavingsValue"),
            moneyFormat = wNumb({
                decimals: 0,
                thousand: ',',
                prefix: '$'
            }),
            moneyDecFormat = wNumb({
                decimals: 2,
                thousand: ',',
                prefix: '$'
            }),
            simpleFormat = wNumb({
                decimals: 0,
                thousand: ','
            }),
            arrayEl = [
                {
                    elem: $("#numberEmployeesSlider")[0],
                    elValue: $("#numberEmployeesValue")[0],
                    elInput: numberEmployees,
                    elFormat: simpleFormat,
                    elStart: 1000,
                    elStep: 10,
                    elMin: 300,
                    elMax: 10000
                },
                {
                    elem: $("#salaryEmployeeSlider")[0],
                    elValue: $("#salaryEmployeeValue")[0],
                    elInput: salaryEmployee,
                    elFormat: moneyFormat,
                    elStart: 50000,
                    elStep: 10000,
                    elMin: 30000,
                    elMax: 200000
                },
                {
                    elem: $("#employeeSickDaysSlider")[0],
                    elValue: $("#employeeSickDaysValue")[0],
                    elInput: employeeSickDays,
                    elFormat: simpleFormat,
                    elStart: 10,
                    elStep: 1,
                    elMin: 2,
                    elMax: 20
                },
                {
                    elem: $("#employeeWorkSickSlider")[0],
                    elValue: $("#employeeWorkSickValue")[0],
                    elInput: employeeWorkSick,
                    elFormat: simpleFormat,
                    elStart: 57,
                    elStep: 1,
                    elMin: 5,
                    elMax: 100
                },
                {
                    elem: $("#employeeAllowanceSlider")[0],
                    elValue: $("#employeeAllowanceValue")[0],
                    elInput: employeeAllowance,
                    elFormat: moneyFormat,
                    elStart: 5000,
                    elStep: 100,
                    elMin: 2500,
                    elMax: 15000
                }
            ];

        arrayEl.forEach(function(item) {
            noUiSlider.create(item.elem, {
                start: item.elStart,
                connect: [true, false],
                animate: false,
                step: item.elStep,
                range: {
                    min: item.elMin,
                    max: item.elMax
                },
                format: item.elFormat
            });

            item.elem.noUiSlider.on('update', function( values, handle ){
                item.elValue.innerHTML = values[handle];
                item.elInput.val(item.elFormat.from(item.elem.noUiSlider.get()));
                calculator();
            });
        });

        function calculator(){
            var value1 = numberEmployees.val(),
                value2 = salaryEmployee.val(),
                value3 = employeeSickDays.val(),
                value4 = employeeWorkSick.val(),
                value5 = employeeAllowance.val(),
                formula1 = Math.round(value1*0.6),
                formula2 = ((value2/52)/5)*((value1*value3)*0.83),
                formula3 = ((value2/52)/5)*(value4*1000),
                formula4 = value1*value5,
                unprocessedFormula5 = Math.round((formula2+formula3+formula4)/10)*10,
                formula5 = moneyDecFormat.to(unprocessedFormula5),
                formula5_2 = moneyFormat.to(unprocessedFormula5),
                formula6 = formula2*0.169,
                formula7 = formula3*0.1,
                formula8 = formula4*0.1,
                unprocessedFormula9 = Math.round((formula6+formula7+formula8)/10)*10,
                formula9 = moneyDecFormat.to(unprocessedFormula9);

            chronicDiseaseValue.text(formula1);
            totalCostValue.text(formula5);
            totalCostValue2.text(formula5_2);
            totalSavingsValue.text(formula9);

            chronicDisease.val(formula1);
            totalCost.val(unprocessedFormula5);
            totalSavings.val(unprocessedFormula9);
        }
    }

    function validateFormRegistration() {
        var formRegistration = $('#formRegistration'),
            freeEmails = "(?!gmail\\.com)(?!yahoo\\.com)(?!hotmail\\.com)",
            regExp = new RegExp("^([\\w-.]+@" + freeEmails + "([\\w-]+.)+[\\w-]{2,4})?$", "i");

        $.validator.addMethod("email", function (value) {
            return regExp.test(value);
        }, "Enter your business email.");

        formRegistration.validate({
            rules: {
                email: {
                    required: true,
                    email: true
                },
                firstName: {
                    required: true,
                    minlength: 2
                },
                lastName: {
                    required: true,
                    minlength: 2
                },
                phone: {
                    required: true,
                    digits: true,
                    minlength: 2
                }
            },
            messages: {
                email: "Enter your business email.",
                firstName : "Please enter your first name.",
                lastName: "Please enter your last name.",
                phone: "Please enter your phone number."
            }
        });
    }

    function initRequest() {
        var request,
            formRegistration = $("#formRegistration"),
            windowRegistration = $("#windowRegistration"),
            windowSuccess = $("#windowSuccess"),
            btnSuccess = $("#btnSuccess"),
            body = $("html, body"),
            bgPopup = $("#bgPopup");

        formRegistration.submit(function(event){
            event.preventDefault();

            if (request) {
                request.abort();
            }

            var $form = $(this),
                $inputs = $form.find("input, select"),
                serializedData = $form.serialize();

            if(!$form.valid()) {
                return false;
            }

            $inputs.prop("disabled", true);

            request = $.ajax({
                url: "contact.aspx",
                type: "post",
                data: serializedData
            });

            request.done(function (response, textStatus, jqXHR){
                body.animate({scrollTop: 0},500);
                windowRegistration.hide();
                windowSuccess.show();
            });

            request.fail(function (jqXHR, textStatus, errorThrown){
                console.error(
                    "The following error occurred: "+
                    textStatus, errorThrown
                );
            });

            request.always(function () {
                $inputs.prop("disabled", false);
            });
        });

        btnSuccess.on("click", function() {
            windowSuccess.hide();
            bgPopup.hide();
        })
    }

    d(), initSlider(), validateFormRegistration(), initRequest();
});
