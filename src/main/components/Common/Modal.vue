<template>
    <div
        class="modal"
        :class="{'is-active': show }"
    >
        <div
            class="modal-background"
            @click="close"
        />
        <div
            class="modal-card"
            :style="modalStyle"
        >
            <header class="modal-card-head">
                <p class="modal-card-title">
                    {{ title }}
                </p>
                <button
                    class="delete"
                    aria-label="close"
                    @click="close"
                />
            </header>
            <section class="modal-card-body">
                <slot>
                    <p>Empty Modal. Feel free to fill this in</p>
                </slot>
            </section>
            <footer
                class="modal-card-foot"
                style="justify-content: flex-end;"
            >
                <button
                    class="button"
                    type="button"
                    @click="close"
                >
                    {{ cancelText }}
                </button>
                <slot name="footer-buttons" />
            </footer>
        </div>
    </div>
</template>

<script>
    export default {
        props: {
            title: {
                type: String,
                required: true
            },
            cancelText: {
                type: String,
                required: false,
                default: "Cancel"
            },
            width: {
                type: String,
                required: false,
                default: null
            }
        },
        data: function () {
            return {
                show: false
            }
        },
        computed: {
            modalStyle() {
                if (this.width) {
                    return `width: ${this.width};`
                }
                return "";
            }
        },
        methods: {
            open: function () {
                this.show = true;
            },
            close: function () {
                this.show = false;
            }
        }
    }
</script>

<style scoped>
    .action-icon:hover {
        transform: scale(1.5);
        cursor: pointer;
    }
</style>
