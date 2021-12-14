<template>
	<v-container>
		<v-row dense>
			<v-col>
				<v-card
					color="#385F73"
					dark
					class="d-flex flex-no-wrap justify-space-between"
				>
					<div>
						<v-card-title class="text-h5"> Spiders </v-card-title>

						<v-card-subtitle>Launch spiders for GDO.</v-card-subtitle>

						<v-card-actions>
							<v-btn text to="/SpidersView" outlined rounded small>
								Spiders
							</v-btn>
						</v-card-actions>
					</div>
					<v-avatar class="ma-3" size="125" tile>
						<v-img src="../assets/spider.jpg"></v-img>
					</v-avatar>
				</v-card>
			</v-col>
			<v-col>
				<v-card
					color="pink"
					dark
					class="d-flex flex-no-wrap justify-space-between"
				>
					<div>
						<v-card-title class="text-h5"> Matches </v-card-title>

						<v-card-subtitle>Take a look to the found matches</v-card-subtitle>

						<v-card-actions>
							<v-btn text to="/MatchesView" outlined rounded small
								>Matches
							</v-btn>
						</v-card-actions>
					</div>
					<v-avatar class="ma-3" size="125" tile>
						<v-img src="../assets/web-connected-things.jpeg"></v-img>
					</v-avatar>
				</v-card>
			</v-col>
			<v-col>
				<v-card color="orange" dark
					class="d-flex flex-no-wrap justify-space-between">
                    <div>
                        <v-card-title class="text-h5"> Upload </v-card-title>

					<v-card-subtitle>Upload your databases</v-card-subtitle>

					<v-card-actions>
						<v-btn text to="/UploadView" outlined rounded small> Upload </v-btn>
					</v-card-actions>
                    </div>
					<v-avatar class="ma-3" size="125" tile>
						<v-img src="../assets/upload.jpg"></v-img>
					</v-avatar>
				</v-card>
			</v-col>
		</v-row>
	</v-container>
</template>

<script>
	export default {};
</script>

<style>
</style>