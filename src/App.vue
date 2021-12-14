<template>
	<v-app>
		<v-app-bar app>
			<v-btn to="/">Home</v-btn>
			<v-toolbar-title class="ml-5">MKGMS Crawler</v-toolbar-title>
		</v-app-bar>
		
		<v-main>
			<v-container fluid fill-height>
				<router-view></router-view>
				<!--
				<v-layout class="align-center justify-center">
					<router-view>SpidersView</router-view>
					<router-link v-if="this.$route.path === '/'" to="/SpidersView">
						<v-btn x-large dark> spiders </v-btn>
					</router-link>
					<router-link v-if="this.$route.path === '/'" to="/MatchesView">
						<v-btn x-large dark> matches </v-btn>
						<router-view>MatchesView</router-view>
					</router-link>
					<router-link v-if="this.$route.path === '/'" to="/UploadView">
						<v-btn x-large dark> upload </v-btn>
						<router-view>UploadView</router-view>
					</router-link>
				</v-layout>
				-->
			</v-container>
		</v-main>
		
	
	</v-app>
</template>

<script>
	export default {
		name: "App",
		data: () => ({
			selected_spiders: [],
			spiders: [
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
		}),
	};
</script>

<style scoped>
	.title {
		margin: auto;
		text-align: center;
		border-top: 3%;
	}
</style>