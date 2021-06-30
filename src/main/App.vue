<template>
    <div id="app">
        <nav
            class="navbar is-dark"
            role="navigation"
        >
            <div class="navbar-brand">
                <router-link
                    :to="{ name: 'Home' }"
                    class="navbar-item"
                >
                    Show Reminder
                </router-link>
            </div>
        </nav>
        <router-view />
    </div>
</template>
