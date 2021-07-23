<template>
  <v-container>
    <!-- Summary section -->
    <v-row>
      <v-col lg="3" md="6" sm="12" col="12">
        <StockCard
          title="TOTAL"
          subtitle="1,800"
          avatar_bg="#00a65a"
          avatar_ic="mdi-cart-outline"
        />
      </v-col>

      <v-col lg="3" md="6" sm="12" col="12">
        <StockCard
          title="SOLD-OUT"
          subtitle="12"
          avatar_bg="#f39c12"
          avatar_ic="mdi-flask-empty-outline"
        />
      </v-col>

      <v-col lg="3" md="6" sm="12" col="12">
        <StockCard
          title="RETURN"
          subtitle="2"
          avatar_bg="#dd4b39"
          avatar_ic="mdi-keyboard-return"
        />
      </v-col>

      <v-col lg="3" md="6" sm="12" col="12">
        <StockCard
          title="DISCOUNT"
          subtitle="101"
          avatar_bg="#00c0ef"
          avatar_ic="mdi-gift-outline"
        />
      </v-col>
    </v-row>

    

    <!-- Table section -->
    <v-card>
      <v-data-table :search="search" :headers="headers" :items="mDataArray">

        <!-- table top section -->
        <template v-slot:top>
          <v-toolbar flat color="white">
            <v-toolbar-title>Stock</v-toolbar-title>
            <v-divider class="mx-4" inset vertical></v-divider>
            <v-text-field
              v-model="search"
              append-icon="search"
              label="Search"
              single-line
              hide-details
            ></v-text-field>
            <v-spacer></v-spacer>
            <v-btn
              @click="$router.push('/stock-create')"
              color="primary"
              dark
              class="mb-2"
            >
              <v-icon left>add</v-icon>
              <span>New Product</span>
            </v-btn>
          </v-toolbar>
        </template>

        <!-- table tr section -->
        <template v-slot:item="{ item }">
          <tr>
            <td>{{ item.id }}</td>
            <td>
                <v-img 
                v-bind:src="item.image | imageUrl" 
                lazy-src="https://picsum.photo/id/11/10/6"
                aspect-ratio="1"
                max-width="50"
                max-height="50"
                ></v-img>
                </td>
            <td>{{ item.name }}</td>
            <td>{{ item.price | currency("฿") }}</td>
            <td>{{ item.stock | number("0,0") }} pcs.</td>
            <td>xxx</td>
            <td>
              <v-icon class="mr-2" @click="editItem(item)"> edit </v-icon>
              <span class="mr-1"></span>
              <v-icon @click="deleteIte(item)"> delete </v-icon>
            </td>
          </tr>
        </template>
      </v-data-table>
    </v-card>
  </v-container>
</template>

<script>
import StockCard from "@/components/cards/StockCard";
import api from "@/services/api"
export default {
  name: "Stock",
  data() {
    return {
      search: "",
      mDataArray: [],
      headers: [
        {
          text: "Id",
          align: "left",
          sortable: false,
          value: "id",
        },
        { text: "Image", value: "image" },
        { text: "Name", value: "name" },
        { text: "Price", value: "price" },
        { text: "Stock", value: "stock" },
        { text: "Action", value: "action" },
      ],
    };
  },
  components: {
    StockCard,
  },
  async mounted() {
    console.log("Stock component is run")
    let result = await api.getProducts()
    this.mDataArray = result.data

  },
  methods: {
    editItem(item) {
      this.$router.push(`/stock-edit/${item.id}`);
    },
  },
};
</script>

<style>
</style>