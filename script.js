const { createApp } = Vue;

createApp({
    data() {
        return {
            liveData: [],
            loading: true,
            error: null,
            selectedYear: null,
            selectedLive: null
        };
    },
    computed: {
        filteredLiveData() {
            if (this.selectedYear === null) {
                return this.liveData;
            }
            return this.liveData.filter(live => {
                const year = new Date(live.day).getFullYear();
                return year === this.selectedYear;
            });
        },
        availableYears() {
            const years = [...new Set(
                this.liveData.map(live => new Date(live.day).getFullYear())
            )];
            return years.sort((a, b) => b - a); // 新しい年順
        },
        uniqueYears() {
            const years = new Set(
                this.filteredLiveData.map(live => new Date(live.day).getFullYear())
            );
            return years.size;
        },
        uniquePlaces() {
            const places = new Set(this.filteredLiveData.map(live => live.place));
            return places.size;
        }
    },
    methods: {
        formatDate(dateString) {
            const date = new Date(dateString);
            const year = date.getFullYear();
            const month = String(date.getMonth() + 1).padStart(2, '0');
            const day = String(date.getDate()).padStart(2, '0');
            return `${year}.${month}.${day}`;
        },
        getTicketImagePath(filename) {
            return `image/ticket/${filename}`;
        },
        openModal(live) {
            this.selectedLive = live;
            document.body.style.overflow = 'hidden';
        },
        closeModal() {
            this.selectedLive = null;
            document.body.style.overflow = '';
        },
        handleImageError(event) {
            console.error('画像の読み込みに失敗しました:', event.target.src);
            alert('チケット画像の読み込みに失敗しました。');
            this.closeModal();
        },
        async loadData() {
            try {
                const response = await fetch('LiveHistory.json');
                if (!response.ok) {
                    throw new Error('JSONファイルの読み込みに失敗しました');
                }
                this.liveData = await response.json();
                // 日付順にソート（新しい順）
                this.liveData.sort((a, b) => new Date(b.day) - new Date(a.day));
            } catch (err) {
                this.error = `エラー: ${err.message}`;
                console.error('データ読み込みエラー:', err);
            } finally {
                this.loading = false;
            }
        }
    },
    mounted() {
        this.loadData();
    }
}).mount('#app');
