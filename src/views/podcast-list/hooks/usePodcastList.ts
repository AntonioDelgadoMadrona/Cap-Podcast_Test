// DEPENDENCIES
import { useState, useEffect, useCallback } from "react";
// HANDLERS
import { getPodcastListHandler } from "../../../api/handlers/podcast-list.handler";
import { useLocalStorage } from "../../../hooks/useLocalStorage";
import { checkUpdateDate } from "../../../utils/data-utils";
import { useFetching } from "../../../hooks/useFetching";
// TYPES
import { PodcastListItemType } from "../../../types";

interface PodcastListStoragedType {
  data: PodcastListItemType[];
  updatedAt: Date;
}

/* eslint-disable react-hooks/exhaustive-deps */
export function usePodcastList() {
  const { setIsFetching } = useFetching();
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
    setIsFetching(true);
    getPodcastListHandler().then((response) => {
      setPodcastListStoraged({ data: response, updatedAt: new Date() });
      setPodcastItems([...response]);
      setIsFetching(false);
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
