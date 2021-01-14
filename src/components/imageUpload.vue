<template>
  <v-file-input
       v-model="file"
       chips
       accept="image/*"
       label="Improve Image"
       @change="onFileChange"
    />
</template>

<script>
export default {
    data: { file: null, image: null },
    methods: {
        onFileChange() {
            const reader = new FileReader()
            reader.readAsDataURL(this.file)
            reader.onload = e => {
                this.image = e.target.result
                console.log(this.image)
            }
        },
    },
}
</script>

<style>

</style>