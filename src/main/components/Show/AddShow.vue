<template>
    <div>
        <div class="box">
            <p class="subtitle">
                Add Show
            </p>
            <div class="field has-addons">
                <div class="control has-icons-left is-expanded">
                    <input
                        v-model="searchTerms"
                        class="input is-medium"
                        type="text"
                        placeholder="Archer"
                    >
                    <span class="icon is-medium is-left">
                        <app-icon
                            icon="search"
                            :action="false"
                        />
                    </span>
                </div>
                <div class="control">
                    <button
                        class="button is-info is-medium"
                        @click="search"
                    >
                        Search
                    </button>
                </div>
            </div>
            <ul v-if="searchResults.length > 0">
                <li
                    v-for="result in searchResults"
                    :key="result.id"
                    class="box"
                >
                    <div class="subtitle">
                        <span>{{ result.name }}</span>
                        <span v-if="result.firstAired">({{ result.firstAired | formatDate("yyyy") }})</span>
                        <span class="is-pulled-right">
                            <app-icon
                                icon="plus"
                                :action="true"
                                @click.native="addShow(result)"
                            />
                        </span>
                    </div>
                    <span>{{ result.overview }}</span>
                </li>
            </ul>
            <p
                v-if="previousSearchTerms !== null && searchResults.length === 0"
                class="has-text-centered"
            >
                No results!
            </p>
        </div>
    </div>
</template>
<script>
    import system from "@app/services/System.js"
    import {ShowService} from "@app/services/ApplicationProxy.js"
    import Icon from "@app/components/Common/Icon.vue"

    const showService = new ShowService();

    export default {
        components: {
            "app-icon": Icon
        },
        data: function () {
            return {
                searchTerms: "",
                searchResults: [],
                previousSearchTerms: null
            }
        },
        methods: {
            search() {
                if (this.searchTerms === this.previousSearchTerms) {
                    return
                }
                showService.search(this.searchTerms)
                    .then(
                        data => {
                            this.searchResults = data.data;
                            this.previousSearchTerms = this.searchTerms;
                        },
                        error => {
                            console.log("Error searching for shows: " + error)
                        }
                    );
            },
            addShow(show) {
                showService.track(show.id).then(
                    () => {
                        system.events.$emit("show:added", {});
                    },
                    error => {
                        console.log("Error searching for shows: " + error)
                    }
                );
            }
        }
    }
</script>
