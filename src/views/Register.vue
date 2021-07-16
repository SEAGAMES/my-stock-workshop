<template>
    <v-container>
        <v-row class="justify-center">
            <v-card style="width:300px;">
                <v-img src="@/assets/login.png" height="160px;"/>
                <v-card-title primary-title>
                    Register
                </v-card-title>

                <v-card-text>
                        <v-form @click.prevent="submit">
                    
                        <!-- Username -->
                        <v-text-field
                            name="username"
                            label="Username"
                            id="username"
                            v-model="account.username"
                            :rules="usernameRules"
                        />
                        <!-- Password -->
                        <v-text-field
                            name="password"
                            label="Password"
                            id="password"
                            :append-icon="isShowPassword ? 'visibility' : 'visibility_off'"
                            @click:append="isShowPassword = !isShowPassword"
                            :type="isShowPassword ? 'text' : 'password'"
                            counter 
                            v-model="account.password"
                            :rules="passwordRules"
                        />

                        <!-- Test Debug v-model ของ user , pass -->
                        <span>{{ account }}</span>


                        <v-row class="justify-space-between px-3 pt-3">
                            <v-btn text @submit="$router.back()">Cancel</v-btn>
                            <v-btn type="submit" color="success">Confirm</v-btn>   
                        </v-row>
                        
                    </v-form>
                </v-card-text>
            </v-card>
        </v-row>
    </v-container>


</template>

<script>
export default { 
    data() {
        return {
            isShowPassword:false,
            account:{
                username:"",
                password:""
            },
            usernameRules:[v1=>!!v1 || "Username is required",] ,
            passwordRules:[v1=>!!v1 || "Password is required", v2=>!!/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/.test(v2) || "Minimum eight characters, at least one letter and one number:"]
        }
    },
    methods() {
        alert(JSON.stringify(this.account))
    }
}
</script>

<style>

</style>