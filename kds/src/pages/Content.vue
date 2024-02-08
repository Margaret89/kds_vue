<template>
	<div style="padding: 40px;">
		<h1>Content</h1>

		<ul>
			<!-- 


			<li><a href="settings-update.html" target="_blank">Settings - check for updates</a></li>
			<li><a href="settings-update-done.html" target="_blank">Settings - up to date</a></li>
			<li><a href="settings-update-found.html" target="_blank">Settings - new version found</a></li> -->
			<li><router-link to="/splash">Splash with loading</router-link></li>
			<li><router-link to="/registration">Registration</router-link></li>
			<li><router-link to="/live">Live</router-link></li>
			<li><router-link to="/live-single-item">Live - single item in card</router-link></li>
			<li><router-link to="/live-hold">Live - hold item effect</router-link></li>
			<li><router-link to="/live-hold-after">Live - after hold item effect</router-link></li>
			<li><router-link to="/live-lating-orders">Live - lating orders</router-link></li>
			<li><router-link to="/live-sidebar">Live - with sidebar and pizza example</router-link></li>
			<li><router-link to="/live-trash">Live - with trash</router-link></li>
			<li><router-link to="/trash">Trash</router-link></li>
			<li><router-link to="/trash-selection">Trash - order selection</router-link></li>
			<li><router-link to="/trash-popup">Trash - order selection (popup &quot;Please choose position&quot;)</router-link></li>
			<li><router-link to="/archive">Archive</router-link></li>
			<li><router-link to="/archive-select">Archive - remake items selection</router-link></li>
			<li><router-link to="/archive-remade-log">Archive - remade log</router-link></li>
			<li><router-link to="/employee-identification">Employee identification</router-link></li>
			<li><router-link to="/employee-identification-problems">Employee identification -problems</router-link></li>
			<li><router-link to="/employee-code">Employee code</router-link></li>
			<li><router-link to="/employee-code-found">Employee code found</router-link></li>
			<li><router-link to="/employee-password">Employee password</router-link></li>
			<li><router-link to="/employee-password-wrong">Employee wrong password</router-link></li>
			<li><router-link to="/enlarge-order">Enlarge order</router-link></li>
			<li><router-link to="/enlarge-order-vip">Enlarge order - VIP, toast, mark as done effect</router-link></li>
			<li><router-link to="/enlarge-item">Enlarge item</router-link></li>
			<li><router-link to="/change-language">Change language</router-link></li>
			<li><router-link to="/typography">Typography</router-link></li>
		</ul>
	</div>
</template>

<script>
export default {
	name: 'Content',
}
</script>

<style scoped>
	
</style>