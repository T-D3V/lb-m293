export const login = "\
<main>\
  <section id='login'>\
    <div class='row'>\
      <div class='col-2 spacer'></div>\
      <div class='col-2 flex-col'>\
        <div id='login-form' class='flex-col'>\
          <div class='flex-row'>\
            <h1>Login <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 448 512'><!--! Font Awesome Pro 6.1.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --><path d='M80 192V144C80 64.47 144.5 0 224 0C303.5 0 368 64.47 368 144V192H384C419.3 192 448 220.7 448 256V448C448 483.3 419.3 512 384 512H64C28.65 512 0 483.3 0 448V256C0 220.7 28.65 192 64 192H80zM144 192H304V144C304 99.82 268.2 64 224 64C179.8 64 144 99.82 144 144V192z'/></svg></h1>\
          </div>\
          <div class='flex-row'>\
            <label for='username'>Username:</label><input type='text' id='username' name='username'>\
          </div>\
          <div class='flex-row'>\
            <label for='password'>Password:</label><input type='password' id='password' name='password'>\
          </div>\
          <div class='flex-row'>\
            <button type='submit' class='btn' id='login-btn'>Login</button>\
          </div>\
        </div>\
      </div>\
      <div class='col-2 spacer'></div>\
    </div>\
  </section>\
</main>\
"