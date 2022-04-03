export const overview ="\
<main>\
  <section id='main' class='flex-col'>\
    <div class='flex-row top-panel'>\
      <div id='date-overview' class='flex-row'>\
        <svg id='overview-back' class='hover' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'><!--! Font Awesome Pro 6.1.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --><path d='M9.375 233.4l128-128c12.5-12.5 32.75-12.5 45.25 0s12.5 32.75 0 45.25L109.3 224H480c17.69 0 32 14.31 32 32s-14.31 32-32 32H109.3l73.38 73.38c12.5 12.5 12.5 32.75 0 45.25c-12.49 12.49-32.74 12.51-45.25 0l-128-128C-3.125 266.1-3.125 245.9 9.375 233.4z'/></svg>\
        <p> Today </p>\
        <svg id='overview-forward' class='hover' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'><!--! Font Awesome Pro 6.1.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --><path d='M502.6 278.6l-128 128c-12.51 12.51-32.76 12.49-45.25 0c-12.5-12.5-12.5-32.75 0-45.25L402.8 288H32C14.31 288 0 273.7 0 255.1S14.31 224 32 224h370.8l-73.38-73.38c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0l128 128C515.1 245.9 515.1 266.1 502.6 278.6z'/></svg>\
      </div>\
      <svg id='overview-add' class='hover' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 448 512'><!--! Font Awesome Pro 6.1.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --><path d='M432 256c0 17.69-14.33 32.01-32 32.01H256v144c0 17.69-14.33 31.99-32 31.99s-32-14.3-32-31.99v-144H48c-17.67 0-32-14.32-32-32.01s14.33-31.99 32-31.99H192v-144c0-17.69 14.33-32.01 32-32.01s32 14.32 32 32.01v144h144C417.7 224 432 238.3 432 256z'/></svg>\
    </div>\
    <div class='row main-overview'>\
      <div class='col-1 flex-col timespan'>\
        <p>Time</p>\
        <p>7:00</p>\
        <p>8:00</p>\
        <p>9:00</p>\
        <p>10:00</p>\
        <p>11:00</p>\
        <p>12:00</p>\
        <p>13:00</p>\
        <p>14:00</p>\
        <p>15:00</p>\
        <p>16:00</p>\
        <p>17:00</p>\
        <p>18:00</p>\
      </div>\
      <div class='col-5 flex-row columns'>\
      <select name='column' id='column' class='prompt'>\
        <option value='col1'>col1</option>\
        <option value='col2'>col2</option>\
        <option value='col3'>col3</option>\
      </select>\
        <div class='flex-col time-col' id='ov3'>\
          <p>Class a <svg class='hover' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'><!--! Font Awesome Pro 6.1.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --><path d='M507.6 122.8c-2.904-12.09-18.25-16.13-27.04-7.338l-76.55 76.56l-83.1-.0002l0-83.1l76.55-76.56c8.791-8.789 4.75-24.14-7.336-27.04c-23.69-5.693-49.34-6.111-75.92 .2484c-61.45 14.7-109.4 66.9-119.2 129.3C189.8 160.8 192.3 186.7 200.1 210.1l-178.1 178.1c-28.12 28.12-28.12 73.69 0 101.8C35.16 504.1 53.56 512 71.1 512s36.84-7.031 50.91-21.09l178.1-178.1c23.46 7.736 49.31 10.24 76.17 6.004c62.41-9.84 114.6-57.8 129.3-119.2C513.7 172.1 513.3 146.5 507.6 122.8zM80 456c-13.25 0-24-10.75-24-24c0-13.26 10.75-24 24-24s24 10.74 24 24C104 445.3 93.25 456 80 456z'/></svg> <svg class='hover' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 448 512'><!--! Font Awesome Pro 6.1.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --><path d='M400 288h-352c-17.69 0-32-14.32-32-32.01s14.31-31.99 32-31.99h352c17.69 0 32 14.3 32 31.99S417.7 288 400 288z'/></svg></p>\
          <div><a href='#' data-to='detail' class='hover'>Mather</a></div>\
          <div><a href='#' data-to='detail' class='hover'>Mather</a></div>\
          <div><a href='#' data-to='detail' class='hover'>Mather</a></div>\
          <div><a href='#' data-to='detail' class='hover'>Mather</a></div>\
          <div><a href='#' data-to='detail' class='hover'>Mather</a></div>\
          <div><a href='#' data-to='detail' class='hover'>Mather</a></div>\
          <div><a href='#' data-to='detail' class='hover'>Mather</a></div>\
          <div><a href='#' data-to='detail' class='hover'>Mather</a></div>\
          <div><a href='#' data-to='detail' class='hover'>Mather</a></div>\
          <div><a href='#' data-to='detail' class='hover'>Mather</a></div>\
          <div><a href='#' data-to='detail' class='hover'>Mather</a></div>\
          <div><a href='#' data-to='detail' class='hover'>Mather</a></div>\
        </div>\
        <div class='flex-col time-col' id='ov2'>\
          <p>Teacher a <svg class='hover' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'><!--! Font Awesome Pro 6.1.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --><path d='M507.6 122.8c-2.904-12.09-18.25-16.13-27.04-7.338l-76.55 76.56l-83.1-.0002l0-83.1l76.55-76.56c8.791-8.789 4.75-24.14-7.336-27.04c-23.69-5.693-49.34-6.111-75.92 .2484c-61.45 14.7-109.4 66.9-119.2 129.3C189.8 160.8 192.3 186.7 200.1 210.1l-178.1 178.1c-28.12 28.12-28.12 73.69 0 101.8C35.16 504.1 53.56 512 71.1 512s36.84-7.031 50.91-21.09l178.1-178.1c23.46 7.736 49.31 10.24 76.17 6.004c62.41-9.84 114.6-57.8 129.3-119.2C513.7 172.1 513.3 146.5 507.6 122.8zM80 456c-13.25 0-24-10.75-24-24c0-13.26 10.75-24 24-24s24 10.74 24 24C104 445.3 93.25 456 80 456z'/></svg> <svg class='hover' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 448 512'><!--! Font Awesome Pro 6.1.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --><path d='M400 288h-352c-17.69 0-32-14.32-32-32.01s14.31-31.99 32-31.99h352c17.69 0 32 14.3 32 31.99S417.7 288 400 288z'/></svg></p>\
          <div><a href='#' data-to='detail' class='hover'>Mather</a></div>\
          <div><a href='#' data-to='detail' class='hover'>Mather</a></div>\
          <div><a href='#' data-to='detail' class='hover'>Mather</a></div>\
          <div><a href='#' data-to='detail' class='hover'>Mather</a></div>\
          <div><a href='#' data-to='detail' class='hover'>Mather</a></div>\
          <div><a href='#' data-to='detail' class='hover'>Mather</a></div>\
          <div><a href='#' data-to='detail' class='hover'>Mather</a></div>\
          <div><a href='#' data-to='detail' class='hover'>Mather</a></div>\
          <div><a href='#' data-to='detail' class='hover'>Mather</a></div>\
          <div><a href='#' data-to='detail' class='hover'>Mather</a></div>\
          <div><a href='#' data-to='detail' class='hover'>Mather</a></div>\
          <div><a href='#' data-to='detail' class='hover'>Mather</a></div>\
        </div>\
        <div class='flex-col time-col' id='ov1'>\
          <p>Class c <svg class='hover' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'><!--! Font Awesome Pro 6.1.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --><path d='M507.6 122.8c-2.904-12.09-18.25-16.13-27.04-7.338l-76.55 76.56l-83.1-.0002l0-83.1l76.55-76.56c8.791-8.789 4.75-24.14-7.336-27.04c-23.69-5.693-49.34-6.111-75.92 .2484c-61.45 14.7-109.4 66.9-119.2 129.3C189.8 160.8 192.3 186.7 200.1 210.1l-178.1 178.1c-28.12 28.12-28.12 73.69 0 101.8C35.16 504.1 53.56 512 71.1 512s36.84-7.031 50.91-21.09l178.1-178.1c23.46 7.736 49.31 10.24 76.17 6.004c62.41-9.84 114.6-57.8 129.3-119.2C513.7 172.1 513.3 146.5 507.6 122.8zM80 456c-13.25 0-24-10.75-24-24c0-13.26 10.75-24 24-24s24 10.74 24 24C104 445.3 93.25 456 80 456z'/></svg> <svg class='hover' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 448 512'><!--! Font Awesome Pro 6.1.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --><path d='M400 288h-352c-17.69 0-32-14.32-32-32.01s14.31-31.99 32-31.99h352c17.69 0 32 14.3 32 31.99S417.7 288 400 288z'/></svg></p>\
          <div><a href='#' data-to='detail' class='hover'>Mather</a></div>\
          <div><a href='#' data-to='detail' class='hover'>Mather</a></div>\
          <div><a href='#' data-to='detail' class='hover'>Mather</a></div>\
          <div><a href='#' data-to='detail' class='hover'>Mather</a></div>\
          <div><a href='#' data-to='detail' class='hover'>Mather</a></div>\
          <div><a href='#' data-to='detail' class='hover'>Mather</a></div>\
          <div><a href='#' data-to='detail' class='hover'>Mather</a></div>\
          <div><a href='#' data-to='detail' class='hover'>Mather</a></div>\
          <div><a href='#' data-to='detail' class='hover'>Mather</a></div>\
          <div><a href='#' data-to='detail' class='hover'>Mather</a></div>\
          <div><a href='#' data-to='detail' class='hover'>Mather</a></div>\
          <div><a href='#' data-to='detail' class='hover'>Mather</a></div>\
        </div>\
      </div>\
    </div>\
  </section>\
</main>\
"