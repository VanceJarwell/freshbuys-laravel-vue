<template>
    <div class="login-bg" style="overflow:hidden">
      <div class="login-form">
        <div class="logo">
          <img src="/img/freshbuys-logo.png">
        </div>

        <p> Welcome to Freshbuys! Fill all the fields to login. </p>
        <form @submit.prevent="login">
          <div class="row">
            <div class="col-md-12">
              <div class="form-group required">
                <input type="text" id="loginform-email" class="input-text" v-model="form.username" autofocus aria-required="true" placeholder="Email" required>
              </div>
            </div>
          </div>

          <div class="row">
            <div class="col-md-12">
              <div class="form-group required">
                <input type="password" id="loginform-password" class="input-text" v-model="form.password" aria-required="true" placeholder="Password" autocoplete="current-password" required>
              </div>
            </div>
          </div>

          <label><input type="checkbox" class="input-checkbox mb-4" id="loginform-rememberme" name="LoginForm[rememberMe]" value="1" checked> Remember Me</label>

          <button type="submit" class="btn btn-primary w-100" name="login-button-modal" v-if="!isLogging">Login</button>       
          <button type="submit" class="btn btn-primary w-100" name="login-button-modal" v-else disabled>Checking your credentials</button>
        </form>
      </div>
    </div>
</template>

<script>
export default {
    data() {
      return {
        form:{username: '',
          password: '',
        },        
        isLogging: false,
        message: null,
      }
    },
    methods: {
      login(){
        this.message = null,
        this.isLogging = true
        this.$store.dispatch('loginUser',{data: this.form}).then(response=>{
          this.$router.push({name: 'home'})
        },error=>{
          console.log('error')
          this.isLogging = false
          this.$notify({
            text: '<i class="material-icons">cancel</i> Invalid username and/or password.',
            type: 'error',
            group: 'alert',
            });
        })
      }
    },
}
</script>