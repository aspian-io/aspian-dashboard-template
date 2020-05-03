/**
 * @param {string} checkboxId - Id of checkbox dedicated to select all field
 * @param {string} wrapperId - checkbox wrapper Id
 * @param {Object} dtObj - datatables.net object
 */
export const activateDtSelectAll = (checkboxId, wrapperId, dtObj) => {
  $(`#${wrapperId}`).on('click', function (e) {
    $(this).toggleClass('dt__select-all-checkbox--checked');
    $(`#${wrapperId} > input`).attr('checked', function (index, attr) {
      return attr === 'checked' ? null : 'checked';
    });
    if ($(`#${checkboxId}`).is(':checked')) {
      dtObj.rows().select();
    } else {
      dtObj.rows().deselect();
    }
  });
};
