// v10

var s_sf01 = document.getElementById("Price-of-property-you-are-selling");
var s_sc01_y = document.getElementById("Yes-sc01");
var s_sc01_n = document.getElementById("No-sc01");
var s_sc02_y = document.getElementById("Yes-sc02");
var s_sc02_n = document.getElementById("No-sc02");
var s_ss01 = document.getElementById("Number-of-sellers");

var sf01 = document.getElementById("sf01");
var sc01 = document.getElementById("sc01");
var sc02 = document.getElementById("sc02");
var ss01 = document.getElementById("ss01");


var p_pf01 = document.getElementById("Price-of-property-you-are-buying");
var p_pc01_y = document.getElementById("Yes-pc01");
var p_pc01_n = document.getElementById("No-pc01");
// var p_pc02_y = document.getElementById("Yes-pc02");
// var p_pc02_n = document.getElementById("No-pc02");
var p_pc03_y = document.getElementById("Yes-pc03");
var p_pc03_n = document.getElementById("No-pc03");
var p_pc04_y = document.getElementById("Yes-pc04");
var p_pc04_n = document.getElementById("No-pc04");
var p_pc05_y = document.getElementById("Yes-pc05");
var p_pc05_n = document.getElementById("No-pc05");
var p_pc06_y = document.getElementById("Yes-pc06");
var p_pc06_n = document.getElementById("No-pc06");
var p_ps01 = document.getElementById("Number-of-buyers");
// var p_ps02 = document.getElementById("Are-you-being-gifted-any-of-your-deposit");
// var p_ps03 = document.getElementById("Are-you-using-any-help-to-buy-isas-for-your-purchase");
// var p_pc07_y = document.getElementById("Yes-pc07");
// var p_pc07_n = document.getElementById("No-pc07");
// var p_pc08_y = document.getElementById("Yes-pc08");
// var p_pc08_n = document.getElementById("No-pc08");

var pf01 = document.getElementById("pf01");
var pc01 = document.getElementById("pc01");
var pc02 = document.getElementById("pc02");
var pc03 = document.getElementById("pc03");
var pc04 = document.getElementById("pc04");
var pc05 = document.getElementById("pc05");
var pc06 = document.getElementById("pc06");
var ps01 = document.getElementById("ps01");
var ps02 = document.getElementById("ps02");
var ps03 = document.getElementById("ps03");
var pc07 = document.getElementById("pc07");
var pc08 = document.getElementById("pc08");


var r_rf01 = document.getElementById("Value-of-property-being-remortgaged");
var r_rc01_y = document.getElementById("Yes-rc01");
var r_rc01_n = document.getElementById("No-rc01");
var r_rc02_y = document.getElementById("Yes-rc02");
var r_rc02_n = document.getElementById("No-rc02");
var r_rs01 = document.getElementById("Number-of-People-Remortgaging");
// var r_rs02 = document.getElementById("When-are-you-looking-to-instruct");
// var r_rc03_y = document.getElementById("Yes-rc03");
// var r_rc03_n = document.getElementById("No-rc03");

var rf01 = document.getElementById("rf01");
var rc01 = document.getElementById("rc01");
var rc02 = document.getElementById("rc02");
var rs01 = document.getElementById("rs01");
var rs02 = document.getElementById("rs02");
var rc03 = document.getElementById("rc03");


var d_df01 = document.getElementById("First-name");
var d_df02 = document.getElementById("Surname");
var d_df03 = document.getElementById("Email-Address");
var d_df04 = document.getElementById("Best-Contact-Number");

var df01 = document.getElementById("df01");
var df02 = document.getElementById("df02");
var df03 = document.getElementById("df03");
var df04 = document.getElementById("df04");


s_sf01.addEventListener("change", function () {
        if (!!s_sf01.value) {  sf01.style.opacity = "100%";  } 
        else { sf01.style.opacity = "0%"; } 
});
p_pf01.addEventListener("change", function () {
        if (!!p_pf01.value) {  pf01.style.opacity = "100%";  } 
        else { pf01.style.opacity = "0%"; } 
});
r_rf01.addEventListener("change", function () {
        if (!!r_rf01.value) {  rf01.style.opacity = "100%";  } 
        else { rf01.style.opacity = "0%"; } 
});
d_df01.addEventListener("change", function () {
        if (!!d_df01.value) {  df01.style.opacity = "100%";  } 
        else { df01.style.opacity = "0%"; } 
});
d_df02.addEventListener("change", function () {
        if (!!d_df02.value) {  df02.style.opacity = "100%";  } 
        else { df02.style.opacity = "0%"; } 
});
d_df03.addEventListener("change", function () {
        if (!!d_df03.value) {  df03.style.opacity = "100%";  } 
        else { df03.style.opacity = "0%"; } 
});
d_df04.addEventListener("change", function () {
        if (!!d_df04.value) {  df04.style.opacity = "100%";  } 
        else { df04.style.opacity = "0%"; } 
});



s_ss01.addEventListener("change", function () {
        if (!!s_ss01.value) {  ss01.style.opacity = "100%";  } 
        else { ss01.style.opacity = "0%"; } 
});
p_ps01.addEventListener("change", function () {
        if (!!p_ps01.value) {  ps01.style.opacity = "100%";  } 
        else { ps01.style.opacity = "0%"; } 
});
/* p_ps02.addEventListener("change", function () {
        if (!!p_ps02.value) {  ps02.style.opacity = "100%";  } 
        else { ps02.style.opacity = "0%"; } 
}); */
/* p_ps03.addEventListener("change", function () {
        if (!!p_ps03.value) {  ps03.style.opacity = "100%";  } 
        else { ps03.style.opacity = "0%"; } 
}); */
r_rs01.addEventListener("change", function () {
        if (!!r_rs01.value) {  rs01.style.opacity = "100%";  } 
        else { rs01.style.opacity = "0%"; } 
});
/* r_rs02.addEventListener("change", function () {
        if (!!r_rs02.value) {  rs02.style.opacity = "100%";  } 
        else { rs02.style.opacity = "0%"; } 
}); */


s_sc01_y.addEventListener("click", function () {
        if (!!s_sc01_y.value || !!s_sc01_n.value) {  sc01.style.opacity = "100%";  } 
        else { sc01.style.opacity = "0%"; } 
});
s_sc01_n.addEventListener("click", function () {
        if (!!s_sc01_y.value || !!s_sc01_n.value) {  sc01.style.opacity = "100%";  } 
        else { sc01.style.opacity = "0%"; }
});

s_sc02_y.addEventListener("click", function () {
        if (!!s_sc02_y.value || !!s_sc02_n.value) {  sc02.style.opacity = "100%";  } 
        else { sc02.style.opacity = "0%"; } 
});
s_sc02_n.addEventListener("click", function () {
        if (!!s_sc02_y.value || !!s_sc02_n.value) {  sc02.style.opacity = "100%";  } 
        else { sc02.style.opacity = "0%"; }
});




p_pc01_y.addEventListener("click", function () {
        if (!!p_pc01_y.value || !!p_pc01_n.value) {  pc01.style.opacity = "100%";  } 
        else { pc01.style.opacity = "0%"; } 
});
p_pc01_n.addEventListener("click", function () {
        if (!!p_pc01_y.value || !!p_pc01_n.value) {  pc01.style.opacity = "100%";  } 
        else { pc01.style.opacity = "0%"; } 
});

/* p_pc02_y.addEventListener("click", function () {
        if (!!p_pc02_y.value || !!p_pc02_n.value) {  pc02.style.opacity = "100%";  } 
        else { pc02.style.opacity = "0%"; } 
});
p_pc02_n.addEventListener("click", function () {
        if (!!p_pc02_y.value || !!p_pc02_n.value) {  pc02.style.opacity = "100%";  } 
        else { pc02.style.opacity = "0%"; } 
}); */

p_pc03_y.addEventListener("click", function () {
        if (!!p_pc03_y.value || !!p_pc03_n.value) {  pc03.style.opacity = "100%";  } 
        else { pc03.style.opacity = "0%"; } 
});
p_pc03_n.addEventListener("click", function () {
        if (!!p_pc03_y.value || !!p_pc03_n.value) {  pc03.style.opacity = "100%";  } 
        else { pc03.style.opacity = "0%"; } 
});

p_pc04_y.addEventListener("click", function () {
        if (!!p_pc04_y.value || !!p_pc04_n.value) {  pc04.style.opacity = "100%";  } 
        else { pc04.style.opacity = "0%"; } 
});
p_pc04_n.addEventListener("click", function () {
        if (!!p_pc04_y.value || !!p_pc04_n.value) {  pc04.style.opacity = "100%";  } 
        else { pc04.style.opacity = "0%"; } 
});

p_pc05_y.addEventListener("click", function () {
        if (!!p_pc05_y.value || !!p_pc05_n.value) {  pc05.style.opacity = "100%";  } 
        else { pc05.style.opacity = "0%"; } 
});
p_pc05_n.addEventListener("click", function () {
        if (!!p_pc05_y.value || !!p_pc05_n.value) {  pc05.style.opacity = "100%";  } 
        else { pc05.style.opacity = "0%"; } 
});

p_pc06_y.addEventListener("click", function () {
        if (!!p_pc06_y.value || !!p_pc06_n.value) {  pc06.style.opacity = "100%";  } 
        else { pc06.style.opacity = "0%"; } 
});
p_pc06_n.addEventListener("click", function () {
        if (!!p_pc06_y.value || !!p_pc06_n.value) {  pc06.style.opacity = "100%";  } 
        else { pc06.style.opacity = "0%"; } 
});

/* p_pc07_y.addEventListener("click", function () {
        if (!!p_pc07_y.value || !!p_pc07_n.value) {  pc07.style.opacity = "100%";  } 
        else { pc07.style.opacity = "0%"; } 
});
p_pc07_n.addEventListener("click", function () {
        if (!!p_pc07_y.value || !!p_pc07_n.value) {  pc07.style.opacity = "100%";  } 
        else { pc07.style.opacity = "0%"; } 
}); */

/* p_pc08_y.addEventListener("click", function () {
        if (!!p_pc08_y.value || !!p_pc08_n.value) {  pc08.style.opacity = "100%";  } 
        else { pc08.style.opacity = "0%"; } 
});
p_pc08_n.addEventListener("click", function () {
        if (!!p_pc08_y.value || !!p_pc08_n.value) {  pc08.style.opacity = "100%";  } 
        else { pc08.style.opacity = "0%"; } 
}); */




r_rc01_y.addEventListener("click", function () {
        if (!!r_rc01_y.value || !!r_rc01_n.value) {  rc01.style.opacity = "100%";  } 
        else { rc01.style.opacity = "0%"; } 
});
r_rc01_n.addEventListener("click", function () {
        if (!!r_rc01_y.value || !!r_rc01_n.value) {  rc01.style.opacity = "100%";  } 
        else { rc01.style.opacity = "0%"; } 
});


r_rc02_y.addEventListener("click", function () {
        if (!!r_rc02_y.value || !!r_rc02_n.value) {  rc02.style.opacity = "100%";  } 
        else { rc02.style.opacity = "0%"; } 
});
r_rc02_n.addEventListener("click", function () {
        if (!!r_rc02_y.value || !!r_rc02_n.value) {  rc02.style.opacity = "100%";  } 
        else { rc02.style.opacity = "0%"; } 
});


/* r_rc03_y.addEventListener("click", function () {
        if (!!r_rc03_y.value || !!r_rc03_n.value) {  rc03.style.opacity = "100%";  } 
        else { rc03.style.opacity = "0%"; } 
});
r_rc03_n.addEventListener("click", function () {
        if (!!r_rc03_y.value || !!r_rc03_n.value) {  rc03.style.opacity = "100%";  } 
        else { rc03.style.opacity = "0%"; } 
}); */











var select_quote = document.getElementById("select_quote");
var get_quote = document.getElementById("get_quote");

var form_quote_sale_and_purchase = document.getElementById("form_quote_sale_and_purchase");
var form_quote_purchase_only = document.getElementById("form_quote_purchase_only");
var form_quote_sale_only = document.getElementById("form_quote_sale_only");
var form_quote_remortgage = document.getElementById("form_quote_remortgage");

var quote_select_field_sale_and_purchase = document.getElementById("quote_select_field_sale_and_purchase");
var quote_select_field_purchase_only = document.getElementById("quote_select_field_purchase_only");
var quote_select_field_sale_only = document.getElementById("quote_select_field_sale_only");
var quote_select_field_remortgage = document.getElementById("quote_select_field_remortgage");

var quote_select__text = document.getElementById("quote_select__text");

var form_quote_body = document.getElementById("form_quote_body");
var sale_details_wrapper = document.getElementById("sale-details-wrapper");
var purchase_details_wrapper = document.getElementById("purchase-details-wrapper");
var remortgage_details_wrapper = document.getElementById("remortgage-details-wrapper");

var sale_wrapper_all_inputs = document.querySelectorAll("#sale-details-wrapper input");
var purchase_wrapper_all_inputs = document.querySelectorAll("#purchase-details-wrapper input");
var remortgage_wrapper_all_inputs = document.querySelectorAll("#remortgage-details-wrapper input");

var sale_wrapper_all_selects = document.querySelectorAll("#sale-details-wrapper select");
var purchase_wrapper_all_selects = document.querySelectorAll("#purchase-details-wrapper select");
var remortgage_wrapper_all_selects = document.querySelectorAll("#remortgage-details-wrapper select");

form_quote_sale_and_purchase.checked = true;
quote_select_field_sale_and_purchase.style.backgroundColor = "#41fcc1";
remortgage_details_wrapper.style.display = "none";
remortgage_wrapper_all_inputs.forEach(function(input) { input.required = false; });
remortgage_wrapper_all_selects.forEach(function(select) { select.required = false; });

get_quote.addEventListener("click", function () {
        if (select_quote.innerHTML == "Sale &amp; Purchase") {
                form_quote_sale_and_purchase.checked = true;
                quote_select__text.innerHTML = "Sale & Purchase - Details";

                sale_details_wrapper.style.display = "flex";
                purchase_details_wrapper.style.display = "flex";
                remortgage_details_wrapper.style.display = "none";

                sale_wrapper_all_inputs.forEach(function(input) { input.required = true; });
                purchase_wrapper_all_inputs.forEach(function(input) { input.required = true; });
                remortgage_wrapper_all_inputs.forEach(function(input) { input.required = false; });

                sale_wrapper_all_selects.forEach(function(select) { select.required = true; });
                purchase_wrapper_all_selects.forEach(function(select) { select.required = true; });
                remortgage_wrapper_all_selects.forEach(function(select) { select.required = false; });

                quote_select_field_sale_and_purchase.style.backgroundColor = "#41fcc1";
                quote_select_field_purchase_only.style.backgroundColor = "#33c698";
                quote_select_field_sale_only.style.backgroundColor = "#33c698";
                quote_select_field_remortgage.style.backgroundColor = "#33c698";
        }
        if (select_quote.innerHTML == "Purchase Only") {
                form_quote_purchase_only.checked = true;
                quote_select__text.innerHTML = "Purchase Only - Details";

                sale_details_wrapper.style.display = "none";
                purchase_details_wrapper.style.display = "flex";
                remortgage_details_wrapper.style.display = "none";

                sale_wrapper_all_inputs.forEach(function(input) { input.required = false; });
                purchase_wrapper_all_inputs.forEach(function(input) { input.required = true; });
                remortgage_wrapper_all_inputs.forEach(function(input) { input.required = false; });

                sale_wrapper_all_selects.forEach(function(select) { select.required = false; });
                purchase_wrapper_all_selects.forEach(function(select) { select.required = true; });
                remortgage_wrapper_all_selects.forEach(function(select) { select.required = false; });

                quote_select_field_sale_and_purchase.style.backgroundColor = "#33c698";
                quote_select_field_purchase_only.style.backgroundColor = "#41fcc1";
                quote_select_field_sale_only.style.backgroundColor = "#33c698";
                quote_select_field_remortgage.style.backgroundColor = "#33c698";
        }
        if (select_quote.innerHTML == "Sale Only") {
                form_quote_sale_only.checked = true;
                quote_select__text.innerHTML = "Sale Only - Details";

                sale_details_wrapper.style.display = "flex";
                purchase_details_wrapper.style.display = "none";
                remortgage_details_wrapper.style.display = "none";

                sale_wrapper_all_inputs.forEach(function(input) { input.required = true; });
                purchase_wrapper_all_inputs.forEach(function(input) { input.required = false; });
                remortgage_wrapper_all_inputs.forEach(function(input) { input.required = false; });

                sale_wrapper_all_selects.forEach(function(select) { select.required = true; });
                purchase_wrapper_all_selects.forEach(function(select) { select.required = false; });
                remortgage_wrapper_all_selects.forEach(function(select) { select.required = false; });

                quote_select_field_sale_and_purchase.style.backgroundColor = "#33c698";
                quote_select_field_purchase_only.style.backgroundColor = "#33c698";
                quote_select_field_sale_only.style.backgroundColor = "#41fcc1";
                quote_select_field_remortgage.style.backgroundColor = "#33c698";
        }
        if (select_quote.innerHTML == "Remortgage") {
                form_quote_remortgage.checked = true;
                quote_select__text.innerHTML = "Remortgage - Details";

                sale_details_wrapper.style.display = "none";
                purchase_details_wrapper.style.display = "none";
                remortgage_details_wrapper.style.display = "flex";

                sale_wrapper_all_inputs.forEach(function(input) { input.required = false; });
                purchase_wrapper_all_inputs.forEach(function(input) { input.required = false; });
                remortgage_wrapper_all_inputs.forEach(function(input) { input.required = true; });

                sale_wrapper_all_selects.forEach(function(select) { select.required = false; });
                purchase_wrapper_all_selects.forEach(function(select) { select.required = false; });
                remortgage_wrapper_all_selects.forEach(function(select) { select.required = true; });

                quote_select_field_sale_and_purchase.style.backgroundColor = "#33c698";
                quote_select_field_purchase_only.style.backgroundColor = "#33c698";
                quote_select_field_sale_only.style.backgroundColor = "#33c698";
                quote_select_field_remortgage.style.backgroundColor = "#41fcc1";
        }

        location.href = "#form_quote";
});

form_quote_sale_and_purchase.addEventListener("click", function () {
        quote_select__text.innerHTML = "Sale & Purchase - Details";
        formQuoteBodyBlink();

        sale_details_wrapper.style.display = "flex";
        purchase_details_wrapper.style.display = "flex";
        remortgage_details_wrapper.style.display = "none";

        sale_wrapper_all_inputs.forEach(function(input) { input.required = true; });
        purchase_wrapper_all_inputs.forEach(function(input) { input.required = true; });
        remortgage_wrapper_all_inputs.forEach(function(input) { input.required = false; });

        sale_wrapper_all_selects.forEach(function(select) { select.required = true; });
        purchase_wrapper_all_selects.forEach(function(select) { select.required = true; });
        remortgage_wrapper_all_selects.forEach(function(select) { select.required = false; });

        quote_select_field_sale_and_purchase.style.backgroundColor = "#41fcc1";
        quote_select_field_purchase_only.style.backgroundColor = "#33c698";
        quote_select_field_sale_only.style.backgroundColor = "#33c698";
        quote_select_field_remortgage.style.backgroundColor = "#33c698";
});
form_quote_purchase_only.addEventListener("click", function () {
        quote_select__text.innerHTML = "Purchase Only - Details";
        formQuoteBodyBlink();

        sale_details_wrapper.style.display = "none";
        purchase_details_wrapper.style.display = "flex";
        remortgage_details_wrapper.style.display = "none";

        sale_wrapper_all_inputs.forEach(function(input) { input.required = false; });
        purchase_wrapper_all_inputs.forEach(function(input) { input.required = true; });
        remortgage_wrapper_all_inputs.forEach(function(input) { input.required = false; });

        sale_wrapper_all_selects.forEach(function(select) { select.required = false; });
        purchase_wrapper_all_selects.forEach(function(select) { select.required = true; });
        remortgage_wrapper_all_selects.forEach(function(select) { select.required = false; });        

        quote_select_field_sale_and_purchase.style.backgroundColor = "#33c698";
        quote_select_field_purchase_only.style.backgroundColor = "#41fcc1";
        quote_select_field_sale_only.style.backgroundColor = "#33c698";
        quote_select_field_remortgage.style.backgroundColor = "#33c698";
});
form_quote_sale_only.addEventListener("click", function () {
        quote_select__text.innerHTML = "Sale Only - Details";
        formQuoteBodyBlink();

        sale_details_wrapper.style.display = "flex";
        purchase_details_wrapper.style.display = "none";
        remortgage_details_wrapper.style.display = "none";

        sale_wrapper_all_inputs.forEach(function(input) { input.required = true; });
        purchase_wrapper_all_inputs.forEach(function(input) { input.required = false; });
        remortgage_wrapper_all_inputs.forEach(function(input) { input.required = false; });

        sale_wrapper_all_selects.forEach(function(select) { select.required = true; });
        purchase_wrapper_all_selects.forEach(function(select) { select.required = false; });
        remortgage_wrapper_all_selects.forEach(function(select) { select.required = false; });

        quote_select_field_sale_and_purchase.style.backgroundColor = "#33c698";
        quote_select_field_purchase_only.style.backgroundColor = "#33c698";
        quote_select_field_sale_only.style.backgroundColor = "#41fcc1";
        quote_select_field_remortgage.style.backgroundColor = "#33c698";
});
form_quote_remortgage.addEventListener("click", function () {
        quote_select__text.innerHTML = "Remortgage";
        formQuoteBodyBlink();

        sale_details_wrapper.style.display = "none";
        purchase_details_wrapper.style.display = "none";
        remortgage_details_wrapper.style.display = "flex";

        sale_wrapper_all_inputs.forEach(function(input) { input.required = false; });
        purchase_wrapper_all_inputs.forEach(function(input) { input.required = false; });
        remortgage_wrapper_all_inputs.forEach(function(input) { input.required = true; });

        sale_wrapper_all_selects.forEach(function(select) { select.required = false; });
        purchase_wrapper_all_selects.forEach(function(select) { select.required = false; });
        remortgage_wrapper_all_selects.forEach(function(select) { select.required = true; });

        quote_select_field_sale_and_purchase.style.backgroundColor = "#33c698";
        quote_select_field_purchase_only.style.backgroundColor = "#33c698";
        quote_select_field_sale_only.style.backgroundColor = "#33c698";
        quote_select_field_remortgage.style.backgroundColor = "#41fcc1";
});


function formQuoteBodyBlink() {
        setTimeout(() => {
                form_quote_body.style.opacity = "10%";
                form_quote_body.style.transition = "all 0.250s";
        }, 1);
        setTimeout(() => {
                form_quote_body.style.opacity = "100%";
                form_quote_body.style.transition = "all 0.250s";
        }, 250);
}
