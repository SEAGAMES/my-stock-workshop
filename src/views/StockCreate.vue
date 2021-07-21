<template>
  <v-container>
      <v-row>
          <v-col class="center" cols="8">
            <v-card class="mx-10 pa-5" outlined>
        <v-form @submit.prevent="submit">
            <v-text-field
              v-model="product.name"
              :counter="10"
              label="Name"
              required
            ></v-text-field>

            <v-text-field
              v-model="product.price"
              suffix="THB"
              type="number"
              label="Price"
              required
            ></v-text-field>

            <v-text-field
              v-model="product.stock"
              suffix="PCS"
              type="number"
              label="Stock"
              required
            ></v-text-field>

            <input @change="onFileSelected" type="file" name="" id="">
            <br />
            <v-img v-if="imageURL" :src="imageURL" height= "100" width="100" class="mt-3"></v-img> 
            <br />
            <v-row>
                <v-spacer></v-spacer>
                <v-btn class="mr-4" @click="cancel">
                    Cancle 
                </v-btn>

                <v-btn color="success" type="submit">
                    Confirm
                </v-btn>

                
            </v-row>
        </v-form>
        <!-- <span>{{ product }}</span> -->
            </v-card>
        </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: "stock-create",
  data: () => ({
    product: {
      name: "",
      price: "",
      stock: "",
      image: null,
    },
    imageURL: null,
  }),
  methods: {
      submit() {
          alert(JSON.stringify(this.product))
      },
      onFileSelected(event) {
      const reader = new FileReader();
      reader.onload = event => {
        // for preview
        this.imageURL = event.target.result;
      };
      reader.readAsDataURL(event.target.files[0]);

      // for upload
      this.product.image = event.target.files[0];
    },
    cancel() {
      this.$router.back();
      },
    
  }
};
</script>

<style>
</style>