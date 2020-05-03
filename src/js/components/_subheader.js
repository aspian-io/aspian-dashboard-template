// Recalculate topbar width based on new viewport size
export function addSubheaderRecalcWidth() {
  $('.omd-subheader').addClass('omd-subheader--recalc-width');
}

export function removeSubheaderRecalcWidth() {
  $('.omd-subheader').removeClass('omd-subheader--recalc-width');
}
