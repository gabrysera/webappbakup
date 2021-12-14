<template>
	<v-container>
		<!--
		<v-row>
			<v-col cols="3">
				<v-card max-width="400" min-width="200" class="pa-5" >
					<v-checkbox
						dense
						v-for="spider in items"
						:key="spider"
						v-model="selected_spiders"
						:label="spider"
						:value="spider"
						hide-details="false"
					></v-checkbox>
				</v-card>
			</v-col>
			<v-col >
				<v-btn
					bottom
					:loading="loading"
					:disabled="loading || selected_spiders.length === 0"
					v-on:click="
						getData();
						loader = 'loading';
					"
					color="primary"
				>
					start crawling
				</v-btn>
			</v-col>
		</v-row>
		-->

		<v-btn
			:loading="loading"
			:disabled="loading || selected_spiders.length === 0"
			v-on:click="
				getData();
				loader = 'loading';
			"
			color="primary"
			class="ma-10"
		>
			start crawling
		</v-btn>
		<v-row>
			<v-col cols="4" v-for="spider in items" :key="spider.name">
				<v-card
					color="brown darken-3"
					class="d-flex flex-no-wrap justify-space-between"
					elevation="10"
					dark
				>
					<div>
						<v-card-title class="" small>
							{{ spider.name }}
						</v-card-title>
						<v-card-actions>
							<v-checkbox
								dense
								v-model="selected_spiders"
								:value="spider.name"
								hide-details="false"
								class="pa-1"
								max-width="100"
								max-heigth="40"
							></v-checkbox>
						</v-card-actions>
					</div>
					<v-avatar class="ma-3" size="90" tile
						><v-img max-width="90" max-heigth="90" :src="spider.path" contain></v-img>
					</v-avatar>
				</v-card>
			</v-col>
		</v-row>
	</v-container>
</template>

<script>
	import axios from "axios";
	export default {
		data: () => ({
			selected_spiders: [],
			items: [
				{ name: "esselunga", path: require("../assets/esselungaacasa.jpg") },
				{name: "coop", path: require("../assets/logocoop.png")},
				{name:"iperal", path:require("../assets/iperal-logo.png")},
				{name:"pam", path:require("../assets/pam.png")},
				{name:"bennet", path:require("../assets/bennet.png")},
				{name:"carrefour",path:require("../assets/carrefour.png")},
				{name:"tigros", path:require("../assets/tigros.png")},
				{name:"iper", path:require("../assets/iper.png")},
				{name:"latuaspesa", path:require("../assets/latuaspesa.png")}
			],

			loader: null,
			loading: false,
		}),
		methods: {
			getData() {
				this.selected_spiders.forEach((spider) => {
					axios({
						baseURL: "http://127.0.0.1:5000",
						url: "/SpidersView",
						method: "post",
						data: {
							name: spider,
						},
					})
						.then((res) => {
							console.log(res);
						})
						.catch((err) => {
							console.log(err);
						});
				});
			},
			addSpider(spider) {
				if (this.selected_spiders.includes(spider)) {
					let index = this.selected_spiders.indexOf(spider);
					this.selected_spiders.splice(index, 1);
				} else {
					this.selected_spiders.push(spider);
				}
			},
			getNumberOfItems(spider) {
				return this.numberOfProducts[spider];
			},
		},
		watch: {
			loader() {
				const l = this.loader;
				this[l] = !this[l];
				setTimeout(() => (this[l] = false), 10000);
				this.loader = null;
			},
		},
	};
</script>


<style scoped>
	.v-list__tile {
		margin-left: 3%;
	}
</style>