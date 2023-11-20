<template>
  <v-card class="mb-0 pt-5" style="height: 700px">
    <v-container style="height: 90%; overflow-y: auto">
      <div v-if="isModify">
        <!-- Modifying Version with Vuetify Components -->
        <v-card-text>
          <v-text-field
            v-model="product.data.name"
            label="Name"
            outlined
            dense
          ></v-text-field>
          <v-text-field
            v-model="product.data.image"
            label="Image URL"
            outlined
            dense
          ></v-text-field>
          <v-textarea
            v-model="product.data.description"
            label="Description"
            outlined
            dense
          ></v-textarea>
          <v-slider
            v-model="product.data.rating"
            :label="`Rating ${product.data.rating}`"
            step="0.5"
            min="0"
            max="5"
          ></v-slider>
          <v-text-field
            v-model="product.data.price"
            label="Price $"
            type="number"
            outlined
            dense
          ></v-text-field>
          <v-text-field
            v-model="product.data.stock"
            label="Stock"
            type="number"
            outlined
            dense
          ></v-text-field>
        </v-card-text>
      </div>
      <div v-else>
        <!-- Displaying Version with Vuetify Components -->
        <v-row>
          <v-col cols="12">
            <v-img
              :src="product.data.image"
              class="item-image"
              aspect-ratio="1.5"
            ></v-img>
          </v-col>
          <v-col cols="12" justify="start">
            <v-card-text>
              <div class="text-h7 mb-2">
                {{ product.data.name }}
              </div>
              <div class="mb-2">
                <template v-for="index in 5">
                  <v-icon
                    color="orange"
                    left
                    v-if="
                      getStarType(index - 1, product.data.rating) === 'full'
                    "
                    >mdi-star</v-icon
                  >
                  <v-icon
                    color="orange"
                    left
                    v-else-if="
                      getStarType(index - 1, product.data.rating) === 'half'
                    "
                    >mdi-star-half</v-icon
                  >
                  <v-icon left v-else>mdi-star-outline</v-icon>
                </template>
              </div>
              <div class="text-subtitle-1 mb-2">
                {{ product.data.description }}
              </div>

              <v-row>
                <v-col cols="6">
                  <v-chip class="ma-1" color="green" width="3">
                    <v-icon left>mdi-cash</v-icon>
                    ${{ product.data.price }}
                  </v-chip>
                </v-col>
                <v-col cols="6">
                  <v-chip class="ma-1" color="orange">
                    <v-icon left>mdi-package-variant-closed</v-icon>
                    {{ product.data.stock }}
                  </v-chip>
                </v-col>
              </v-row>
            </v-card-text>
          </v-col>
        </v-row>
      </div>
    </v-container>

    <v-card-actions class="pr-10">
      <v-row justify="end">
        <v-btn
          color="primary"
          @click="isModify ? updateItem() : (isModify = !isModify)"
        >
          {{ isModify ? "Save Changes" : "Modify" }}
        </v-btn>
        <v-btn
          color="error"
          @click="isModify ? (isModify = !isModify) : deleteItem()"
        >
          {{ isModify ? "Cancel" : "Delete" }}
        </v-btn>
      </v-row>
    </v-card-actions>
  </v-card>
</template>

<script lang="ts" setup>
import { ref } from "vue";
import { ProductDoc } from "../data-types";
import { deleteProductByID, updateProduct } from "../data-controller";

const isModify = ref(false);
const { item } = defineProps<{ item: ProductDoc }>();

const product = ref(item);

function deleteItem() {
  if (confirm("Do you want to delete this item?")) {
    deleteProductByID(product.value.id);
  }
}

function updateItem() {
  if (confirm("Do you want to update this item?")) {
    updateProduct(product.value);
    isModify.value = !isModify;
  }
}

function getStarType(index: number, rating: number) {
  if (index < Math.floor(rating)) {
    return "full"; // Full star
  } else if (index < rating) {
    return "half"; // Half star
  }
  return "empty"; // Empty star
}
</script>

<style scoped></style>
