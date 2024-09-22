import { EntityDataModuleConfig, EntityMetadataMap } from "@ngrx/data";

const entityMetadata : EntityMetadataMap = {
    Post : {
        entityDispatcherOptions: {
            // It will not wait for http request for making changes, it will automatically update the store
            optimisticUpdate: true,
            optimisticDelete: true,
        }
    }
}

export const entityConfig : EntityDataModuleConfig = {
    entityMetadata
}