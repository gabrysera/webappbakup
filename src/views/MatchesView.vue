<template>
	<v-layout>
		<v-row>
			<v-col cols="2">
				<v-radio-group v-model="selected" class="mt-10">
					<v-radio
						v-for="shop in shops"
						:key="shop"
						:label="shop"
						:value="shop"
					></v-radio>
				</v-radio-group>
				<v-btn v-on:click="getData" :disabled="selected === ''"> search </v-btn>
			</v-col>
			<v-col cols="6">
				<h3 style="left: 10">Prodotti associati</h3>
				<v-data-table
					:items="products"
					:headers="headers"
					:item-class="row_classes"
					class="elevation-1 mt-3"
					dense
				>
				</v-data-table>
			</v-col>
			<v-col>
				<apexchart
					type="pie"
					width="380"
					:options="chartOptions"
					:series="series"
					class="mt-5"
				></apexchart>
			</v-col>
		</v-row>
	</v-layout>
</template>

<script>
	import axios from "axios";
	export default {
		data: () => ({
			selected: "",
			series:[0,100],
			chartOptions: {
				chart: {
					width: 380,
					type: "pie",
				},
				labels: ["prodotti trovati", "non trovati"],
				responsive: [
					{
						breakpoint: 480,
						options: {
							chart: {
								width: 200,
							},
							legend: {
								position: "bottom",
							},
						},
					},
				],
			},
			shops: [
				"esselunga",
				"coop",
				"iperal",
				"pam",
				"bennet",
				"carrefour",
				"tigros",
				"iper",
				"la tua spesa",
			],
			products: [],
			headers: [
				{ text: "prodotto", value: "name" },
				{ text: "prezzo online", value: "priceOnline" },
				{ text: "prezzo in negozio", value: "priceOffline" },
				{ text: "codice", value: "code" },
			],
		}),
		methods: {
			getData() {
				axios({
					baseURL: "http://127.0.0.1:5000",
					url: "/MatchesView",
					method: "get",
					params: {
						shopName: this.selected,
					},
				})
					.then((res) => {
						console.log(res);
						console.log(this.selected);
						this.products = res.data.productsData;
						this.series[0] = Number(res.data.numberOfProducts);
						this.series[1] = 100 - res.data.numberOfProducts;
						console.log(this.series)
						/*
						this.chart.updateSeries([
							{
								data: [
									{
										x: res.data.numberOfProducts,
										
									},
									{
										x: 100 - res.data.numberOfProducts,
									}
								],
							},
						]);
						*/
					})
					.catch((err) => {
						console.log(err);
					});
			},
			row_classes(item) {
				if (item.priceOnline != item.priceOffline) {
					return "blue";
				}
			},
		},
	};
</script>

<style  scoped>
	#list {
		float: left;
	}
	.blue {
		background-color: blue;
	}
</style>