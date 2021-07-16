<template>
    <v-container>
        <v-row class="justify-center">
            <v-card style="width:300px;">
                <v-img src="@/assets/login.png" height="160px;"/>
                <v-card-text>
                    <v-form>
                        <!-- Username -->
                        <v-text-field
                            name="username"
                            label="Username"
                            id="username"
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
                        />

                        <v-row class="justify-space-between px-3 pt-3">
                            <v-btn text @click="$router.push('/register')">Register</v-btn>
                            <v-btn color="success">Login</v-btn>   
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
            isShowPassword:false
        }
    },
}
</script>

<style>

</style>