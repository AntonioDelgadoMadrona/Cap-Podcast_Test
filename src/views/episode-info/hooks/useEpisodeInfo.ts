// DEPENDENCIES
import { useState, useEffect, useCallback } from "react";
import { useParams } from "react-router-dom";
// HANDLERS
import { getEpisodeInfoHandler } from "../../../api/handlers/episode-info.handler";
import { useLocalStorage } from "../../../hooks/useLocalStorage";
import { checkUpdateDate } from "../../../utils/data-utils";
import { useFetching } from "../../../hooks/useFetching";
// TYPES
import { EpisodeDetailsType, PodcastDetailsType } from "../../../types";

interface EpisodeInfoType {
  episodeDetails?: EpisodeDetailsType;
  podcastDetails?: PodcastDetailsType;
}

interface EpisodeInfoStorageType {
  data: EpisodeInfoType;
  updatedAt: Date;
}

/* eslint-disable react-hooks/exhaustive-deps */
export function useEpisodeInfo() {
  const { id = "", episodeId = "" } = useParams();
  const { setIsFetching } = useFetching();
  const [episodeInfoStorage, setEpisodeInfoStorage] = useLocalStorage<EpisodeInfoStorageType>("episodeInfo", {
    data: {},
    updatedAt: new Date(),
  });
  const [episodeInfo, setEpisodeInfo] = useState<EpisodeInfoType>({});

  useEffect(() => {
    if (episodeInfoStorage?.updatedAt && episodeInfoStorage?.data?.podcastDetails) {
      const isOnTime = checkUpdateDate(episodeInfoStorage.updatedAt);
      const isSameId =
        Number(episodeInfoStorage.data.podcastDetails?.id) === Number(id) &&
        Number(episodeInfoStorage.data.episodeDetails?.id) === Number(episodeId);
      isOnTime && isSameId ? setEpisodeInfo({ ...episodeInfoStorage.data }) : getEpisodeInfo();
    } else getEpisodeInfo();
  }, []);

  const getEpisodeInfo = useCallback(() => {
    setIsFetching(true);
    getEpisodeInfoHandler(id, episodeId).then((response) => {
      setEpisodeInfoStorage({ data: response, updatedAt: new Date() });
      setEpisodeInfo({ ...response });
      setIsFetching(false);
    });
  }, []);

  return {
    episodeInfo,
  };
}
