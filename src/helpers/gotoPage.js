import EventBus from "@/eventBus";

export default function goToPage(pageName, pageParams) {
    EventBus.$emit('goToPage', pageName, pageParams)
}
