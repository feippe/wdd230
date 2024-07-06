document.querySelector('#txtRepeatPassword').addEventListener('focusout',function(){
    const pss1 = document.querySelector("#txtPassword");
    const pss2 = document.querySelector("#txtRepeatPassword");
    if ((pss1.value !== pss2.value) || pss1.value=='' || pss2.value=='') {
		pss2.style.border = "solid 1px var(--color-error)";
        pss2.style.borderRight = "solid 8px var(--color-error)";
		pss2.value = "";
	} else {
		pss2.style.border = "solid 1px var(--color-valid)";
        pss2.style.borderRight = "solid 8px var(--color-valid)";
	}
});