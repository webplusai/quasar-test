<script setup lang="ts"></script>

<template>
    <section id="home" class="q-px-lg">
        <q-breadcrumbs class="q-ma-lg">
            <q-breadcrumbs-el>Skill Bank</q-breadcrumbs-el>
        </q-breadcrumbs>
        <section class="q-ma-lg">
            <h5>Features</h5>
        </section>
        <q-card class="text-black q-ma-lg">
            <q-card-section>
                <div class="text-h6">Staff management</div>
                <p>A Staff management system</p>
                <q-btn
                    to="/profiles"
                    class="absolute-bottom-right q-mb-lg q-mr-lg card-btn-width"
                >
                    Profiles
                </q-btn>
            </q-card-section>
        </q-card>
        <q-card class="text-black q-ma-lg">
            <q-card-section>
                <div class="text-h6">Skills management</div>
                <p>A Skills management system</p>
                <q-btn
                    to="/skills"
                    class="absolute-bottom-right q-mb-lg q-mr-lg card-btn-width"
                >
                    Skill
                </q-btn>
            </q-card-section>
        </q-card>
        <q-card class="text-black q-ma-lg">
            <q-card-section>
                <div class="text-h6">Smart Search</div>
                <p>A staff search by skills</p>
                <q-btn
                    to="/overall"
                    class="absolute-bottom-right q-mb-lg q-mr-lg card-btn-width"
                >
                    Overall
                </q-btn>
            </q-card-section>
        </q-card>
    </section>
</template>

<style scoped lang="scss">
.subtitle {
    font-size: 15px;
    margin-left: 5px;
    font-style: italic;
}
:deep(a) {
    text-decoration: none !important;
    color: $dark !important;
}
.card-btn-width {
    width: 200px;
}
</style>
