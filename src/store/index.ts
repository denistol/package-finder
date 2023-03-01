import { defineStore } from "pinia";
import { fetchPackages, IFetchPackagesParams, PackageObject } from "../api";

interface RootState {
  loading: boolean;
  total: number;
  objects: PackageObject[];
}

const rootState = {
  loading: false,
  total: 0,
  objects: [],
};

export const useDefaultStore = defineStore("default", {
  state: () => rootState as RootState,
  getters: {
    count(): number {
        return this.objects.length
    },
    hasMore(): boolean {
        return this.objects.length < this.total && this.total !== 0
    }
  },
  actions: {
    async fetchPackages(params: IFetchPackagesParams) {
      this.loading = true

      const { objects, total } = await fetchPackages(params)
      .finally(() => {
        this.loading = false
      })

      if(params.from === 0) {
        this.objects = []
      }
      this.objects.push(...objects);
      this.total = total;
    },
  },
});
