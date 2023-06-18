// DEPENDENCIES
import { useState, useEffect, useCallback } from "react";
// HANDLERS
import { getPodcastListHandler } from "../../../api/handlers/podcast-list.handler";
// TYPES
import { PodcastListItemType } from "../../../types";
import { useLocalStorage } from "../../../hooks/useLocalStorage";
import { checkUpdateDate } from "../../../utils/data-utils";

interface PodcastListStoragedType {
  data: PodcastListItemType[];
  updatedAt: Date;
}

/* eslint-disable react-hooks/exhaustive-deps */
export function usePodcastList() {
  const [podcastListStoraged, setPodcastListStoraged] = useLocalStorage<PodcastListStoragedType>("podcastList", {
    data: [],
    updatedAt: new Date(),
  });
  const [podcastItems, setPodcastItems] = useState<PodcastListItemType[]>([]);

  useEffect(() => {
    if (podcastListStoraged?.updatedAt && podcastListStoraged?.data?.length > 0) {
      const isOnTime = checkUpdateDate(podcastListStoraged.updatedAt);
      isOnTime ? setPodcastItems([...podcastListStoraged.data]) : getPodcastList();
    } else getPodcastList();
  }, []);

  const getPodcastList = useCallback(() => {
    getPodcastListHandler().then((response) => {
      setPodcastListStoraged({ data: response, updatedAt: new Date() });
      setPodcastItems([...response]);
    });
  }, []);

  const handleFilterPodcastList = useCallback(
    (filter: string) => {
      const filteredPodcastList = podcastListStoraged?.data.filter((podcastItem) => {
        const { artistName, name } = podcastItem;
        return (
          artistName.toLowerCase().includes(filter.toLowerCase()) || name.toLowerCase().includes(filter.toLowerCase())
        );
      });
      setPodcastItems(filteredPodcastList);
    },
    [podcastListStoraged]
  );

  return {
    handleFilterPodcastList,
    podcastItems,
  };
}
