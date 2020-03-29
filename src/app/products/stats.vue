<template>
  <v-row dense class="mb-0 tw-px-2 md:tw-px-5 tw-bg-white tw-pb-5">
    <v-col cols="12" sm="6" md="3" v-for="(item, index) in stats" :key="index">
      <v-card tile outlined>
        <v-card-text class="tw-text-center">
          <h4 class="tw-text-2xl tw-font-black tw-mb-2">{{ item.value }}</h4>
          <h6 class="text-sm">{{ item.label }}</h6>
        </v-card-text>
      </v-card>
    </v-col>
  </v-row>
</template>
<script>
export default {
  data: () => ({
    stats: [
      { label: "Total", value: 100 },
      { label: "CurrentUtilization", value: "90%" },
      { label: "Total Dues", value: "500,000" },
      { label: "Total Collections", value: "1,223,1500,000" },
    ],
  }),
};
</script>
