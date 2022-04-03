export const changeview ="\
<main>\
  <section id='main'>\
    <div class='row'>\
      <div class='col-2 spacer'></div>\
      <div class='col-2 flex-col'>\
        <div id='change-form' class='flex-col'>\
          <div class='flex-row'>\
            <h1>Change Overview</h1>\
          </div>\
          <div class='flex-row'>\
            <label for='columnname'>Columnname:</label><input type='text' id='columnname' name='columnname'>\
          </div>\
          <div class='flex-row'>\
            <label for='class-teacher'>Class or Teacher:</label>\
            <select name='class-teacher' id='class-teacher' class='prompt'>\
              <option value='col1'>col1</option>\
              <option value='col2'>col2</option>\
              <option value='col3'>col3</option>\
            </select>\
          </div>\
          <div class='flex-row'>\
            <label for='colour'>Colour:</label>\
            <select name='colour' id='colour' class='prompt'>\
              <option value='col1'>col1</option>\
              <option value='col2'>col2</option>\
              <option value='col3'>col3</option>\
            </select>\
          </div>\
          <div class='flex-row'>\
            <button type='submit' class='btn' id='login-btn'>Save | Update</button>\
          </div>\
        </div>\
      </div>\
      <div class='col-2 spacer'></div>\
    </div>\
  </section>\
</main>\
"