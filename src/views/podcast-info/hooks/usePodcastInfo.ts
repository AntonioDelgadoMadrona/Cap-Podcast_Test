// DEPENDENCIES
import { useState, useEffect, useCallback } from "react";
import { useParams } from "react-router-dom";
// HANDLERS
import { getPodcastInfoHandler } from "../../../api/handlers/podcast-info.handler";
// UTILS
import { useLocalStorage } from "../../../hooks/useLocalStorage";
import { checkUpdateDate } from "../../../utils/data-utils";
// TYPES
import { PodcastDetailsType, PodcastEpisodeType } from "../../../types";

interface PodcastInfoType {
  podcastDetails?: PodcastDetailsType;
  podcastEpisodes?: PodcastEpisodeType[];
}

interface PodcastInfoStorageType {
  data: PodcastInfoType;
  updatedAt: Date;
}

/* eslint-disable react-hooks/exhaustive-deps */
export function usePodcastInfo() {
  const { id = "" } = useParams();
  const [podcastInfoStorage, setPodcastInfoStorage] = useLocalStorage<PodcastInfoStorageType>("podcastInfo", {
    data: {},
    updatedAt: new Date(),
  });
  const [podcastInfo, setPodcastInfo] = useState<PodcastInfoType>({});

  useEffect(() => {
    if (podcastInfoStorage?.updatedAt && podcastInfoStorage?.data?.podcastDetails) {
      const isOnTime = checkUpdateDate(podcastInfoStorage.updatedAt);
      const isSameId = Number(podcastInfoStorage.data.podcastDetails.id) === Number(id);
      isOnTime && isSameId ? setPodcastInfo({ ...podcastInfoStorage.data }) : getPodcastInfo();
    } else getPodcastInfo();
  }, []);

  const getPodcastInfo = useCallback(() => {
    getPodcastInfoHandler(id).then((response) => {
      setPodcastInfoStorage({ data: response, updatedAt: new Date() });
      setPodcastInfo({ ...response });
    });
  }, []);

  return {
    podcastInfo,
  };
}
