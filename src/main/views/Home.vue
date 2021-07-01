<template>
    <div>
        <section class="section">
            <app-add-show />
            <div class="pt-3" />
            <app-show-list />
        </section>
    </div>
</template>

<script>
    //eslint-disable-next-line no-unused-vars
    import system from "@app/services/System.js";

    import AddShow from "@app/components/Show/AddShow.vue"
    import ShowList from "@app/components/Show/ShowList.vue"

    export default {
        components: {
            "app-add-show": AddShow,
            "app-show-list": ShowList
        },
        data: function() {
            return {
            }
        }
    }
</script>
