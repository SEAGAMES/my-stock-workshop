<template>
    <v-container>
        <!-- Summary section -->
        <v-row>
            <v-col lg="3" md="6" sm="12" col="12"> 
                <StockCard title="TOTAL" subtitle="1,800" avatar_bg="#00a65a" avatar_ic="mdi-cart-outline" />
            </v-col>

            <v-col lg="3" md="6" sm="12" col="12"> 
                <StockCard title="SOLD-OUT" subtitle="12" avatar_bg="#f39c12" avatar_ic="mdi-flask-empty-outline" />
            </v-col>

            <v-col lg="3" md="6" sm="12" col="12">
                <StockCard title="RETURN" subtitle="2" avatar_bg="#dd4b39" avatar_ic="mdi-keyboard-return" />
            </v-col>

            <v-col lg="3" md="6" sm="12" col="12"> 
                <StockCard title="DISCOUNT" subtitle="101" avatar_bg="#00c0ef" avatar_ic="mdi-gift-outline" />
            </v-col>
        </v-row>

        <!-- Table section -->
        <v-card>
            <v-data-table
                :headers="headers"
                :items="mDataArray"
            >
            <template v-slot:item="{ item }">
                <tr>
                    <td>{{ item.id }}</td>
                    <td>{{ item.image }}</td>
                    <td>{{ item.name }}</td>
                    <td>{{ item.price | currency("฿") }}</td>
                    <td>{{ item.stock | number("0,0") }} pcs.</td>
                    <td>xxx</td>
                    <td>
                     <v-icon class="ma-2" @click="editItem(item)">
                         edit
                     </v-icon>
                     <span class="mr-1"></span>
                     <v-icon @click="deleteIte(item)">
                         delete
                     </v-icon>
                     </td>
                </tr>
            </template>
            </v-data-table>
        </v-card>

    </v-container>
</template>

<script>

import StockCard from "@/components/cards/StockCard"
import Axios from "axios"
export default {
    name : "Stock" , 
    data() {
        return {
            mDataArray:[],
                headers: [
                    {
                    text: 'Id',
                    align: 'left',
                    sortable: false,
                    value: 'id',
                    },
                    {  text: 'Image', value: 'image' },
                    {  text: 'Name', value: 'name' },
                    {  text: 'Price', value: 'price' },
                    {  text: 'Stock', value: 'stock' },
                    {  text: 'Action', value: 'action' },

                ],
        }
    },
    components : {
        StockCard
    },
    mounted() {
        console.log("Stock component is run"),
        Axios.get("http://localhost:8081/api/v2/product").then((result)=>{
            console.log(JSON.stringify(result.data))
            this.mDataArray = result.data
        })
    }

}
</script>

<style>

</style>